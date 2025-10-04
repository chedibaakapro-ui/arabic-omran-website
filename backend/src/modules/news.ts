import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { prisma } from '../server'
import { verifyAdmin } from './auth'

const router = express.Router()

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../../frontend/public/images/news')
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }
    
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    // Generate unique filename: timestamp-originalname
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`
    cb(null, uniqueName)
  }
})

const fileFilter = (req: any, file: any, cb: any) => {
  // Accept images only
  if (file.mimetype.startsWith('image/')) {
    cb(null, true)
  } else {
    cb(new Error('Only image files are allowed!'), false)
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
})

// GET /api/news - Get all news (public route)
router.get('/', async (req, res) => {
  try {
    const news = await prisma.news.findMany({
      where: { published: true },
      include: {
        admin: {
          select: { email: true, name: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    
    res.json({ news })
  } catch (error) {
    console.error('Get news error:', error)
    res.status(500).json({ error: 'Failed to fetch news' })
  }
})

// GET /api/news/:id - Get single news by ID (public route)
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    const news = await prisma.news.findUnique({
      where: { id },
      include: {
        admin: {
          select: { email: true, name: true }
        }
      }
    })
    
    if (!news) {
      return res.status(404).json({ error: 'News not found' })
    }
    
    res.json(news)
  } catch (error) {
    console.error('Get news by ID error:', error)
    res.status(500).json({ error: 'Failed to fetch news' })
  }
})

// POST /api/news - Create new news with image upload (protected)
router.post('/', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { title, category, summary, content } = req.body
    const adminId = req.admin!.id
    
    if (!title || !category || !summary || !content) {
      return res.status(400).json({ 
        error: 'Title, category, summary, and content are required' 
      })
    }
    
    // Get image path if uploaded
    const imagePath = req.file ? `/images/news/${req.file.filename}` : ''
    
    const news = await prisma.news.create({
      data: {
        title,
        category,
        summary,
        content,
        image: imagePath,
        author: req.admin!.email,
        readTime: '5 دقائق',
        published: true,
        publishedAt: new Date(),
        adminId
      }
    })
    
    res.status(201).json(news)
  } catch (error) {
    console.error('Create news error:', error)
    res.status(500).json({ error: 'Failed to create news' })
  }
})

// PUT /api/news/:id - Update news with optional image upload (protected)
router.put('/:id', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params
    const { title, category, summary, content } = req.body
    
    if (!title || !category || !summary || !content) {
      return res.status(400).json({ 
        error: 'Title, category, summary, and content are required' 
      })
    }
    
    // Check if news exists
    const existingNews = await prisma.news.findUnique({
      where: { id }
    })
    
    if (!existingNews) {
      return res.status(404).json({ error: 'News not found' })
    }
    
    // Prepare update data
    const updateData: any = {
      title,
      category,
      summary,
      content,
      updatedAt: new Date()
    }
    
    // If new image uploaded, delete old one and update path
    if (req.file) {
      // Delete old image if it exists
      if (existingNews.image && existingNews.image.startsWith('/images/news/')) {
        const oldImagePath = path.join(__dirname, '../../../frontend/public', existingNews.image)
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath)
        }
      }
      
      updateData.image = `/images/news/${req.file.filename}`
    }
    
    const updatedNews = await prisma.news.update({
      where: { id },
      data: updateData
    })
    
    res.json(updatedNews)
  } catch (error) {
    console.error('Update news error:', error)
    res.status(500).json({ error: 'Failed to update news' })
  }
})

// DELETE /api/news/:id - Delete news (protected)
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params
    
    // Check if news exists
    const existingNews = await prisma.news.findUnique({
      where: { id }
    })
    
    if (!existingNews) {
      return res.status(404).json({ error: 'News not found' })
    }
    
    // Delete associated image if it exists
    if (existingNews.image && existingNews.image.startsWith('/images/news/')) {
      const imagePath = path.join(__dirname, '../../../frontend/public', existingNews.image)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
    }
    
    await prisma.news.delete({
      where: { id }
    })
    
    res.json({ message: 'News deleted successfully' })
  } catch (error) {
    console.error('Delete news error:', error)
    res.status(500).json({ error: 'Failed to delete news' })
  }
})

export default router
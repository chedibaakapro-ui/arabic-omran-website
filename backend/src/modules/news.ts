import express from 'express'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary'
import { Readable } from 'stream'
import { prisma } from '../server'
import { verifyAdmin } from './auth'

const router = express.Router()

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Configure multer to use memory storage
const storage = multer.memoryStorage()

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true)
  } else {
    cb(new Error('Only image files are allowed!'), false)
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
})

// Helper function to upload to Cloudinary
const uploadToCloudinary = (buffer: Buffer, folder: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: `omran/${folder}` },
      (error, result) => {
        if (error) reject(error)
        else resolve(result!.secure_url)
      }
    )
    Readable.from(buffer).pipe(uploadStream)
  })
}

// Helper function to delete from Cloudinary
const deleteFromCloudinary = async (imageUrl: string) => {
  try {
    const publicId = imageUrl.split('/').slice(-2).join('/').split('.')[0]
    await cloudinary.uploader.destroy(`omran/${publicId}`)
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error)
  }
}

// GET /api/news
router.get('/', async (req, res) => {
  try {
    const news = await prisma.news.findMany({
      where: { published: true },
      include: { admin: { select: { email: true, name: true } } },
      orderBy: { createdAt: 'desc' }
    })
    res.json({ news })
  } catch (error) {
    console.error('Get news error:', error)
    res.status(500).json({ error: 'Failed to fetch news' })
  }
})

// GET /api/news/:id
router.get('/:id', async (req, res) => {
  try {
    const news = await prisma.news.findUnique({
      where: { id: req.params.id },
      include: { admin: { select: { email: true, name: true } } }
    })
    
    if (!news) {
      return res.status(404).json({ error: 'News not found' })
    }
    res.json(news)
  } catch (error) {
    console.error('Get news error:', error)
    res.status(500).json({ error: 'Failed to fetch news' })
  }
})

// POST /api/news
router.post('/', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { title, category, summary, content } = req.body
    
    if (!title || !category || !summary || !content) {
      return res.status(400).json({ 
        error: 'Title, category, summary, and content are required' 
      })
    }
    
    let imageUrl = ''
    if (req.file) {
      imageUrl = await uploadToCloudinary(req.file.buffer, 'news')
    }
    
    const news = await prisma.news.create({
      data: {
        title,
        category,
        summary,
        content,
        image: imageUrl,
        author: req.admin!.email,
        readTime: '5 دقائق',
        published: true,
        publishedAt: new Date(),
        adminId: req.admin!.id
      }
    })
    
    res.status(201).json(news)
  } catch (error) {
    console.error('Create news error:', error)
    res.status(500).json({ error: 'Failed to create news' })
  }
})

// PUT /api/news/:id
router.put('/:id', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params
    const { title, category, summary, content } = req.body
    
    if (!title || !category || !summary || !content) {
      return res.status(400).json({ 
        error: 'Title, category, summary, and content are required' 
      })
    }
    
    const existingNews = await prisma.news.findUnique({ where: { id } })
    
    if (!existingNews) {
      return res.status(404).json({ error: 'News not found' })
    }
    
    const updateData: any = {
      title,
      category,
      summary,
      content,
      updatedAt: new Date()
    }
    
    if (req.file) {
      // Delete old image from Cloudinary
      if (existingNews.image) {
        await deleteFromCloudinary(existingNews.image)
      }
      // Upload new image
      updateData.image = await uploadToCloudinary(req.file.buffer, 'news')
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

// DELETE /api/news/:id
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    const existingNews = await prisma.news.findUnique({
      where: { id: req.params.id }
    })
    
    if (!existingNews) {
      return res.status(404).json({ error: 'News not found' })
    }
    
    // Delete image from Cloudinary
    if (existingNews.image) {
      await deleteFromCloudinary(existingNews.image)
    }
    
    await prisma.news.delete({ where: { id: req.params.id } })
    
    res.json({ message: 'News deleted successfully' })
  } catch (error) {
    console.error('Delete news error:', error)
    res.status(500).json({ error: 'Failed to delete news' })
  }
})

export default router
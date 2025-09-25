import express from 'express'
import { prisma } from './server'
import { verifyAdmin } from './auth'

const router = express.Router()

// GET /api/news - Get all news articles (public route)
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

// GET /api/news/:id - Get single news article by ID (public route)
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
      return res.status(404).json({ error: 'News article not found' })
    }
    
    res.json(news)
  } catch (error) {
    console.error('Get news by ID error:', error)
    res.status(500).json({ error: 'Failed to fetch news article' })
  }
})

// POST /api/news - Create new news article (protected)
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const { title, summary, content, category } = req.body
    const adminId = req.admin!.id
    
    if (!title || !summary || !content || !category) {
      return res.status(400).json({ 
        error: 'Title, summary, content, and category are required' 
      })
    }
    
    const news = await prisma.news.create({
      data: {
        title,
        summary,
        content,
        category,
        image: '',
        author: req.admin!.name || req.admin!.email,
        readTime: '5 دقائق',
        published: true,
        publishedAt: new Date(),
        adminId
      }
    })
    
    res.status(201).json(news)
  } catch (error) {
    console.error('Create news error:', error)
    res.status(500).json({ error: 'Failed to create news article' })
  }
})

// PUT /api/news/:id - Update news article (protected)
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { title, summary, content, category } = req.body
    
    if (!title || !summary || !content || !category) {
      return res.status(400).json({ 
        error: 'Title, summary, content, and category are required' 
      })
    }
    
    // Check if news article exists and belongs to admin or allow any admin to edit
    const existingNews = await prisma.news.findUnique({
      where: { id }
    })
    
    if (!existingNews) {
      return res.status(404).json({ error: 'News article not found' })
    }
    
    const updatedNews = await prisma.news.update({
      where: { id },
      data: {
        title,
        summary,
        content,
        category,
        updatedAt: new Date()
      }
    })
    
    res.json(updatedNews)
  } catch (error) {
    console.error('Update news error:', error)
    res.status(500).json({ error: 'Failed to update news article' })
  }
})

// DELETE /api/news/:id - Delete news article (protected)
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params
    
    // Check if news article exists
    const existingNews = await prisma.news.findUnique({
      where: { id }
    })
    
    if (!existingNews) {
      return res.status(404).json({ error: 'News article not found' })
    }
    
    await prisma.news.delete({
      where: { id }
    })
    
    res.json({ message: 'News article deleted successfully' })
  } catch (error) {
    console.error('Delete news error:', error)
    res.status(500).json({ error: 'Failed to delete news article' })
  }
})

export default router
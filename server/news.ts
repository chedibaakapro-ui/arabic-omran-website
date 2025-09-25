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

export default router
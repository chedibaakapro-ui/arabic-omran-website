import express from 'express'
import { prisma } from './server'
import { verifyAdmin } from './auth'

const router = express.Router()

// GET /api/projects - Get all projects (public route)
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      include: {
        admin: {
          select: { email: true, name: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    
    res.json({ projects })
  } catch (error) {
    console.error('Get projects error:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

// POST /api/projects - Create new project (protected)
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const { title, location, price, type } = req.body
    const adminId = req.admin!.id
    
    if (!title || !location || !price || !type) {
      return res.status(400).json({ 
        error: 'Title, location, price, and type are required' 
      })
    }
    
    const project = await prisma.project.create({
      data: {
        title,
        location,
        price,
        type,
        image: '',
        description: '',
        published: true,
        publishedAt: new Date(),
        adminId
      }
    })
    
    res.status(201).json(project)
  } catch (error) {
    console.error('Create project error:', error)
    res.status(500).json({ error: 'Failed to create project' })
  }
})

export default router
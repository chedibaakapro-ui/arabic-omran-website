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

// GET /api/projects/:id - Get single project by ID (public route)
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        admin: {
          select: { email: true, name: true }
        }
      }
    })
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    res.json(project)
  } catch (error) {
    console.error('Get project by ID error:', error)
    res.status(500).json({ error: 'Failed to fetch project' })
  }
})

// POST /api/projects - Create new project (protected)
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const { title, location, price, type, description } = req.body
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
        description: description || '',
        image: '',
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

// PUT /api/projects/:id - Update project (protected)
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { title, location, price, type, description } = req.body
    
    if (!title || !location || !price || !type) {
      return res.status(400).json({ 
        error: 'Title, location, price, and type are required' 
      })
    }
    
    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id }
    })
    
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title,
        location,
        price,
        type,
        description: description || '',
        updatedAt: new Date()
      }
    })
    
    res.json(updatedProject)
  } catch (error) {
    console.error('Update project error:', error)
    res.status(500).json({ error: 'Failed to update project' })
  }
})

// DELETE /api/projects/:id - Delete project (protected)
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params
    
    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id }
    })
    
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    await prisma.project.delete({
      where: { id }
    })
    
    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Delete project error:', error)
    res.status(500).json({ error: 'Failed to delete project' })
  }
})

export default router
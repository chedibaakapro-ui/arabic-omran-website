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
    const uploadDir = path.join(__dirname, '../../../frontend/public/images/projects')
    
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

// POST /api/projects - Create new project with image upload (protected)
router.post('/', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { title, location, price, type, description } = req.body
    const adminId = req.admin!.id
    
    if (!title || !location || !price || !type) {
      return res.status(400).json({ 
        error: 'Title, location, price, and type are required' 
      })
    }
    
    // Get image path if uploaded
    const imagePath = req.file ? `/images/projects/${req.file.filename}` : ''
    
    const project = await prisma.project.create({
      data: {
        title,
        location,
        price,
        type,
        description: description || '',
        image: imagePath,
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

// PUT /api/projects/:id - Update project with optional image upload (protected)
router.put('/:id', verifyAdmin, upload.single('image'), async (req, res) => {
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
    
    // Prepare update data
    const updateData: any = {
      title,
      location,
      price,
      type,
      description: description || '',
      updatedAt: new Date()
    }
    
    // If new image uploaded, delete old one and update path
    if (req.file) {
      // Delete old image if it exists
      if (existingProject.image && existingProject.image.startsWith('/images/projects/')) {
        const oldImagePath = path.join(__dirname, '../../../frontend/public', existingProject.image)
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath)
        }
      }
      
      updateData.image = `/images/projects/${req.file.filename}`
    }
    
    const updatedProject = await prisma.project.update({
      where: { id },
      data: updateData
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
    
    // Delete associated image if it exists
    if (existingProject.image && existingProject.image.startsWith('/images/projects/')) {
      const imagePath = path.join(__dirname, '../../../frontend/public', existingProject.image)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
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
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

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      include: { admin: { select: { email: true, name: true } } },
      orderBy: { createdAt: 'desc' }
    })
    res.json({ projects })
  } catch (error) {
    console.error('Get projects error:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id },
      include: { admin: { select: { email: true, name: true } } }
    })
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json(project)
  } catch (error) {
    console.error('Get project error:', error)
    res.status(500).json({ error: 'Failed to fetch project' })
  }
})

// POST /api/projects
router.post('/', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { title, location, price, type, description } = req.body
    
    if (!title || !location || !price || !type) {
      return res.status(400).json({ 
        error: 'Title, location, price, and type are required' 
      })
    }
    
    let imageUrl = ''
    if (req.file) {
      imageUrl = await uploadToCloudinary(req.file.buffer, 'projects')
    }
    
    const project = await prisma.project.create({
      data: {
        title,
        location,
        price,
        type,
        description: description || '',
        image: imageUrl,
        published: true,
        publishedAt: new Date(),
        adminId: req.admin!.id
      }
    })
    
    res.status(201).json(project)
  } catch (error) {
    console.error('Create project error:', error)
    res.status(500).json({ error: 'Failed to create project' })
  }
})

// PUT /api/projects/:id
router.put('/:id', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params
    const { title, location, price, type, description } = req.body
    
    if (!title || !location || !price || !type) {
      return res.status(400).json({ 
        error: 'Title, location, price, and type are required' 
      })
    }
    
    const existingProject = await prisma.project.findUnique({ where: { id } })
    
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    const updateData: any = {
      title,
      location,
      price,
      type,
      description: description || '',
      updatedAt: new Date()
    }
    
    if (req.file) {
      // Delete old image from Cloudinary
      if (existingProject.image) {
        await deleteFromCloudinary(existingProject.image)
      }
      // Upload new image
      updateData.image = await uploadToCloudinary(req.file.buffer, 'projects')
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

// DELETE /api/projects/:id
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    const existingProject = await prisma.project.findUnique({
      where: { id: req.params.id }
    })
    
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    // Delete image from Cloudinary
    if (existingProject.image) {
      await deleteFromCloudinary(existingProject.image)
    }
    
    await prisma.project.delete({ where: { id: req.params.id } })
    
    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Delete project error:', error)
    res.status(500).json({ error: 'Failed to delete project' })
  }
})

export default router
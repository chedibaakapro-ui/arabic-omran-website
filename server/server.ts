import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

// Import routes
import newsRoutes from './news'
import projectsRoutes from './projects'
import authRoutes from './auth'

const app = express()
const port = process.env.PORT || 3001

// Initialize Prisma
export const prisma = new PrismaClient()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/projects', projectsRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`)
})
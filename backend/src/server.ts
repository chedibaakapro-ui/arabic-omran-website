import { config } from 'dotenv'
import path from 'path'

// Load environment variables from .env file in project root
config({ path: path.resolve(__dirname, '../../.env') })

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { PrismaClient } from '@prisma/client'

// Import routes
import newsRoutes from './modules/news'
import projectsRoutes from './modules/projects'
import authRoutes from './modules/auth'

const app = express()
const port = process.env.PORT || 3001

// Initialize Prisma
export const prisma = new PrismaClient()

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/projects', projectsRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'OMRAN Backend API'
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server...')
  await prisma.$disconnect()
  process.exit(0)
})

// Start server
app.listen(port, () => {
  console.log(`🚀 OMRAN Backend API running on http://localhost:${port}`)
  console.log(`📊 Health check: http://localhost:${port}/health`)
  console.log(`🗄️  Database: ${process.env.DATABASE_URL || 'Not configured'}`)
})
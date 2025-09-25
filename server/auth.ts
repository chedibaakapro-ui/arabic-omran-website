import express from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from './server'

const router = express.Router()

// Middleware to verify admin email
export const verifyAdmin = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { adminId: string, email: string }
    
    // Check if admin exists in database
    const admin = await prisma.admin.findUnique({
      where: { id: decoded.adminId }
    })

    if (!admin) {
      return res.status(401).json({ error: 'Invalid token. Admin not found.' })
    }

    // Add admin info to request
    req.admin = admin
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' })
  }
}

// Login route - verify admin email
router.post('/login', async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    // Check if email is in allowed admin emails
    const allowedEmails = process.env.ADMIN_EMAILS?.split(',') || []
    if (!allowedEmails.includes(email)) {
      return res.status(403).json({ error: 'Access denied. Not an authorized admin email.' })
    }

    // Find or create admin
    let admin = await prisma.admin.findUnique({
      where: { email }
    })

    if (!admin) {
      admin = await prisma.admin.create({
        data: { email }
      })
    }

    // Generate JWT token
    const token = jwt.sign(
      { adminId: admin.id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    )

    res.json({
      message: 'Login successful',
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Login failed' })
  }
})

// Verify token route
router.get('/verify', verifyAdmin, (req, res) => {
  res.json({
    message: 'Token is valid',
    admin: req.admin
  })
})

// Logout route
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' })
})

export default router

// Extend Express Request type to include admin
declare global {
  namespace Express {
    interface Request {
      admin?: {
        id: string
        email: string
        name: string | null
        createdAt: Date
        updatedAt: Date
      }
    }
  }
}
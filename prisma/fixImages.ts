// Save this file as: prisma/fixImages.ts
// Run with: npx ts-node prisma/fixImages.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Saudi Arabian themed images
const SAUDI_NEWS_IMAGES = [
  "https://images.unsplash.com/photo-1585665805456-e87f0ec446f5?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&auto=format&q=80&fm=webp", 
  "https://images.unsplash.com/photo-1549888834-3ec93abae044?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1589395937772-e5380caebe6f?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
];

const SAUDI_PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1565100952085-229da4491afc?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1609228079687-ab1f95e3e591?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1569108912319-4ae088f51b89?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
  "https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
];

async function fixImages() {
  console.log('🔧 Starting to fix images in database...\n')

  // Fix News images
  console.log('📰 Fixing news articles...')
  const news = await prisma.news.findMany()
  let newsFixed = 0
  
  for (let i = 0; i < news.length; i++) {
    const article = news[i]
    if (!article.image || article.image.trim() === '' || article.image === 'null') {
      await prisma.news.update({
        where: { id: article.id },
        data: {
          image: SAUDI_NEWS_IMAGES[i % SAUDI_NEWS_IMAGES.length]
        }
      })
      newsFixed++
      console.log(`  ✅ Updated news article: ${article.title}`)
    }
  }
  console.log(`  📊 Fixed ${newsFixed} out of ${news.length} news articles\n`)

  // Fix Project images
  console.log('🏗️  Fixing projects...')
  const projects = await prisma.project.findMany()
  let projectsFixed = 0
  
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]
    if (!project.image || project.image.trim() === '' || project.image === 'null') {
      await prisma.project.update({
        where: { id: project.id },
        data: {
          image: SAUDI_PROJECT_IMAGES[i % SAUDI_PROJECT_IMAGES.length]
        }
      })
      projectsFixed++
      console.log(`  ✅ Updated project: ${project.title}`)
    }
  }
  console.log(`  📊 Fixed ${projectsFixed} out of ${projects.length} projects\n`)

  console.log('✨ All images have been fixed successfully!')
}

fixImages()
  .catch((e) => {
    console.error('❌ Error fixing images:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
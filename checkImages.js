const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkImages() {
  const news = await prisma.news.findFirst();
  console.log('First news image:', news.image);
  await prisma.$disconnect();
}

checkImages();
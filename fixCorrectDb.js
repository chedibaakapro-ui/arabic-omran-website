const { PrismaClient } = require('@prisma/client');

// Point directly to the actual database location
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./prisma/prisma/dev.db'
    }
  }
});

const newImages = [
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
];

async function updateCorrectDatabase() {
  console.log('Updating the correct database at prisma/prisma/dev.db...');
  
  try {
    const news = await prisma.news.findMany();
    console.log(`Found ${news.length} news articles`);
    
    for (let i = 0; i < news.length; i++) {
      await prisma.news.update({
        where: { id: news[i].id },
        data: { image: newImages[i % newImages.length] }
      });
      console.log(`Updated: ${news[i].title.substring(0, 40)}...`);
    }
    
    console.log('All done! Correct database updated.');
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

updateCorrectDatabase();
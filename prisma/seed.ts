import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create admin users
  const admins = [
    {
      email: 'chedibaaka.pro@gmail.com',
      name: 'Chedi Baaka'
    },
    {
      email: 'hussam@sauragency.com', 
      name: 'Hussam (Saur Agency)'
    },
    {
      email: 'hussambaaka@gmail.com',
      name: 'Hussam Baaka'
    }
  ]

  for (const admin of admins) {
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: admin.email }
    })

    if (!existingAdmin) {
      await prisma.admin.create({
        data: admin
      })
      console.log(`Created admin: ${admin.email}`)
    } else {
      console.log(`Admin already exists: ${admin.email}`)
    }
  }

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
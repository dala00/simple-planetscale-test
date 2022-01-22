import { PrismaClient } from '.prisma/client'

export default async function handler(req, res) {
  const prisma = new PrismaClient()

  const posts = await prisma.post.findMany({ orderBy: { id: 'desc' } })

  res.status(200).json({ posts })
}

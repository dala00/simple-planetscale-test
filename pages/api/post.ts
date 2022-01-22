import { PrismaClient } from '.prisma/client'

type Request = {
  body: string
}

export default async function handler(req, res) {
  const { body } = req.body as Request
  const prisma = new PrismaClient()

  await prisma.post.create({
    data: {
      body,
    },
  })

  const posts = await prisma.post.findMany({ orderBy: { id: 'desc' } })

  res.status(200).json({ posts })
}

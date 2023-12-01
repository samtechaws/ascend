import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
export const revalidate = 0;
export const dynamic = 'force-dynamic';
const prisma = new PrismaClient().$extends(withAccelerate())

export default prisma

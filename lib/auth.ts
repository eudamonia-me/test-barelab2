import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function requireAdmin() {
  const session = await getSession()
  
  if (!session || (session.user as any)?.role !== 'admin') {
    throw new Error('Unauthorized')
  }
  
  return session
}

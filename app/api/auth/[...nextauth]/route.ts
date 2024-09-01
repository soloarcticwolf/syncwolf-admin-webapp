import { NEXTAUTH_OPTIONS } from '@/app/config/nextauth.config'
import NextAuth from 'next-auth/next'

const handler = NextAuth(NEXTAUTH_OPTIONS)

export { handler as GET, handler as POST }

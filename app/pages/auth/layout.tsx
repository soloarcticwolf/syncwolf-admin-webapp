import AuthLayout from '@/app/layout/auth.layout'
import { ReactNode } from 'react'

const AuthPage = ({ children }: { children: ReactNode }) => {
	return <AuthLayout>{children}</AuthLayout>
}

export default AuthPage

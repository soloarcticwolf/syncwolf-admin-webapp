import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthLayout from './layout/auth.layout'
import DashBoardLayout from './layout/dashboard.layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Syncwolf',
	description: 'Manage your resources',
}

export default function RootLayout(props: any) {
	// :: Logic for authentication to dashboard here
	const userId = 'test'

	return (
		<html lang='en'>
			<body className={inter.className}>
				{userId ? (
					<DashBoardLayout>{props.children}</DashBoardLayout>
				) : (
					<AuthLayout>{props.children}</AuthLayout>
				)}
			</body>
		</html>
	)
}

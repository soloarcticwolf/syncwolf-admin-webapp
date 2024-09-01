import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './provider/authprovider.provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Syncwolf',
	description: 'Manage your resources',
}

export default async function RootLayout(props: any) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>{props.children}</AuthProvider>
			</body>
		</html>
	)
}

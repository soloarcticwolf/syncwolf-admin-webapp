import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

/**
 * Quick refresher: The credentialsProvider has the authorize function, which takes
 * crendentials and req args,
 * user inputs are inside credentials along with csrfToken
 * inside the authrize fn, validation of user with backend to be performed and user or null to be returned
 * later in the callbacks session and jwt, the user information will be present in token
 */

export const NEXTAUTH_OPTIONS: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const user = {
					id: '1',
					userId: 'userid',
					session: '2',
					token: 'token',
					user: true,
					// @ts-ignore
					eamil: credentials!.email,
					password: credentials?.password!,
				}

				if (user) return user
				return null
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			session.user = token.user!
			return session
		},
		async jwt({ token }) {
			return token
		},
	},
	pages: {
		signIn: '/pages/auth/signin',
	},
}

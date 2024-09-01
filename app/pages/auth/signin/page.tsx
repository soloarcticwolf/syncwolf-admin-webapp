'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignIn() {
	const [credentials, setCredentials] = useState({ email: '', password: '' })

	console.log('*******credentials', credentials)

	async function handleSubmit() {
		const response = await signIn('credentials', {
			email: credentials.email,
			password: credentials.password,
		})

		console.log('###############response', response)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					className='border border-red-400'
					placeholder='email'
					onChange={(e) =>
						setCredentials({ ...credentials, email: e.target.value })
					}
				/>
				<input
					className='border border-red-400'
					type='password'
					placeholder='password'
					onChange={(e) =>
						setCredentials({ ...credentials, password: e.target.value })
					}
				/>
				<input type='submit' value='submit' aria-current />
			</form>
		</div>
	)
}

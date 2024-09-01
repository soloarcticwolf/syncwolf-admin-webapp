'use client'

import Link from 'next/link'
import { LINK_SIGNIN, LINK_SIGNOUT } from './constants/links.constants'

export default function Home() {
	return (
		<>
			<Link href={LINK_SIGNIN}>Signin</Link>
			<Link href={LINK_SIGNOUT}>Sign out</Link>
		</>
	)
}

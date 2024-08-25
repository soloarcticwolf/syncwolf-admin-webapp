import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<h1>
				home page , give users option to visit the respective page they want to
				go. superusers, employees
				<div>
					<Link href={'/pages/login'}>Login</Link>
					<Link href={'/pages/dashboard'}>Dashboard</Link>
				</div>
			</h1>
		</main>
	)
}

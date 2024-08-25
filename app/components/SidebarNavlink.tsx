import Link from 'next/link'
import { FC } from 'react'

interface Props {
	title: string
	href: string
}
const SidebarNavlink: FC<Props> = ({ title, href }) => {
	return (
		<div className={'text-blue-600 hover:text-blue-800 bg-slate-200 p-2'}>
			<Link href={href}>{title}</Link>
		</div>
	)
}

export default SidebarNavlink

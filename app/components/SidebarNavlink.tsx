'use client'

import Link from 'next/link'
import { FC } from 'react'
import { noop } from '../util/common'

interface Props {
	title: string
	href?: string
	actionClick?: () => void
}
const SidebarNavlink: FC<Props> = ({ title, href, actionClick }) => {
	return (
		<div className={'text-blue-600 hover:text-blue-800 bg-slate-200 p-2'}>
			<Link href={href || '#'} onClick={actionClick ? actionClick : noop}>
				{title}
			</Link>
		</div>
	)
}

export default SidebarNavlink

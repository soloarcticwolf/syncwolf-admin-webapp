import { FC } from 'react'
import SidebarNavlink from './SidebarNavlink'

const SidebarFooter: FC = () => {
	return (
		<div className=''>
			sidebarfooter
			<SidebarNavlink href='/' title='Logout' />
		</div>
	)
}

export default SidebarFooter

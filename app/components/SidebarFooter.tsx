import { FC } from 'react'
import { LINK_SIGNOUT } from '../constants/links.constants'
import SidebarNavlink from './SidebarNavlink'

const SidebarFooter: FC = () => {
	return (
		<div className=''>
			sidebarfooter
			<SidebarNavlink href={LINK_SIGNOUT} title='Logout' />
		</div>
	)
}

export default SidebarFooter

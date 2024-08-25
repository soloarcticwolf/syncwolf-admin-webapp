import { FC } from 'react'
import styles from './leftsidebar.module.css'
import SidebarFooter from './SidebarFooter'
import SidebarNavlink from './SidebarNavlink'

const LeftSidebar: FC = () => {
	return (
		<div className={styles.leftSidebarContainer}>
			<SidebarNavlink title={'Dashboard'} href={'/pages/dashboard'} />
			<SidebarNavlink title={'Task Allocation'} href={'/pages/task'} />
			<SidebarNavlink title={'Chat'} href={'/pages/chat'} />
			<SidebarNavlink title={'Account'} href={'/pages/account'} />
			<SidebarFooter />
		</div>
	)
}

export default LeftSidebar

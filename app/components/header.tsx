import Link from 'next/link'
import { FC } from 'react'
import styles from './header.module.css'

const Header: FC = () => {
	return (
		<div className={styles.headerMasterContainer}>
			Header
			<Link href={'/auth/logout'} className='btn btn-blue'>
				Logout
			</Link>
		</div>
	)
}

export default Header

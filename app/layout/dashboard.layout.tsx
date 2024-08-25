import { FC } from 'react'
import Header from '../components/header'
import LeftSidebar from '../components/leftsidebar'
import RightSidebar from '../components/rightsidebar'

// interface Props {
// 	children: ReactNode
// }

const DashBoardLayout: FC<any> = (props) => {
	return (
		<>
			this is dashboard layout
			<Header />
			<div className='flex'>
				<LeftSidebar />
				<div className='w-[900px]'>{props.children}</div>
				<RightSidebar />
			</div>
		</>
	)
}

export default DashBoardLayout

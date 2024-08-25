import Link from 'next/link'
import { FC } from 'react'

interface TypeTaskInfo {
	id: string
	title: string
	taskType: 'pickup' | 'assist' | 'expedition'
	assignedTo: string
	toMapLatitude: string
	toMapLongitude: string
	fromMapLatitude: string
	fromMapLongitude: string
	notes: string
	status: 'active' | 'paused' | 'inactive'
	scheduledDate: string
	priority: 'high' | 'medium' | 'low'
	completionRemark: string
	attachment: Blob
	isRecurringTask: boolean
	recurringInterval: 'weekly' | 'monthly' | 'half-yearly' | 'yearly'
}

interface Props {
	data: any
}

const Task: FC<Props> = ({ data }) => {
	return (
		<Link href={`/pages/task/${data.id}`}>
			<div className='flex border-2 border-spacing-1'>
				<p>{data.title}</p>
			</div>
		</Link>
	)
}

export default Task

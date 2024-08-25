import Task from '@/app/components/task'
import { NextPage } from 'next'

const TaskAllocation: NextPage = () => {
	return (
		<div>
			<Task
				data={{ id: 'adfasf23434234k2h34', title: 'Runway maintainance' }}
			/>
			<Task
				data={{ id: 'adfasf234342sdk2h34', title: 'Runway maintainance' }}
			/>
			<Task
				data={{ id: 'adfasf2asdfasdk2h34', title: 'Runway maintainance' }}
			/>
			<Task
				data={{ id: 'adfasf2343asdfk2h34', title: 'Runway maintainance' }}
			/>
		</div>
	)
}

export default TaskAllocation

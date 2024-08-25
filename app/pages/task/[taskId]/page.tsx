import { PageProps } from '@/.next/types/app/layout'
import { NextPage } from 'next'

const TaskInfo: NextPage = (props: PageProps) => {
	console.log('**********taskinfo', props)
	return <div>{props.params.taskId}</div>
}

export default TaskInfo

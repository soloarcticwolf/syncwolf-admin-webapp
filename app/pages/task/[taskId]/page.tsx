import { NextPage } from 'next'

const TaskInfo: NextPage = (props) => {
	console.log('**********taskinfo', props)
	return <div>{props.params.taskId}</div>
}

export default TaskInfo

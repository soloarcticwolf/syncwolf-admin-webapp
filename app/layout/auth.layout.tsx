import { FC, ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const AuthLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<div>THIS IS AUTH LAYOUT</div>
			{children}
		</div>
	)
}

export default AuthLayout

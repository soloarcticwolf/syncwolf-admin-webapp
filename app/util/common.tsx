export function noop() {
	if (process.env.NODE_ENV === 'production') return
	console.info('Executing no operation')
}

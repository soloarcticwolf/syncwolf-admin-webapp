/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			// :: Add on
			// {
			//   protocol: 'https',
			//   hostname:'host'
			// }
		],
	},
	env: {
		// add env vars here
	},
}

export default nextConfig

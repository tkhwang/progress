export interface IClientConfig {
	PROGRESS_URL: string | undefined
	PROGRESS_API_URL: string | undefined
}

export default function (): IClientConfig {
	const env = process.env.REACT_APP_NODE_ENV || 'dev'
	switch (env) {
		case 'local':
			return {
				PROGRESS_URL: process.env.REACT_APP_PROGRESS_URL_LOCAL,
				PROGRESS_API_URL: process.env.REACT_APP_PROGRESS_API_URL_LOCAL
			}
		case 'dev':
			return {
				PROGRESS_URL: process.env.REACT_APP_PROGRESS_URL_DEV,
				PROGRESS_API_URL: process.env.REACT_APP_PROGRESS_API_URL_DEV
			}
		default:
			return {
				PROGRESS_URL: process.env.REACT_APP_PROGRESS_URL_DEV,
				PROGRESS_API_URL: process.env.REACT_APP_PROGRESS_API_URL_DEV
			}
	}
}

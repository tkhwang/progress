export default () => ({
	PROGRESS_API_URL:
		process.env.NODE_ENV === 'dev' ? process.env.PROGRESS_API_URL_DEV : process.env.PROGRESS_API_URL_LOCAL,
	oauth: {
		google: {
			url:
				process.env.NODE_ENV === 'dev'
					? process.env.PROGRESS_OAUTH_GOOGLE_CALLBACK_URL_DEV
					: process.env.PROGRESS_OAUTH_GOOGLE_CALLBACK_URL_LOCAL,
		},
		github: {
			url:
				process.env.NODE_ENV === 'dev'
					? process.env.PROGRESS_OAUTH_GITHUB_CALLBACK_URL_DEV
					: process.env.PROGRESS_OAUTH_GITHUB_CALLBACK_URL_LOCAL,
		},
	},
})

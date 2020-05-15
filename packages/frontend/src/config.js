export default function () {
	switch (process.env.REACT_APP_NODE_ENV) {
		case 'local':
			return { API_URL: 'http://localhost:80' }
		case 'dev':
			return { API_URL: 'https://learn-in-public.herokuapp.com' }
		default:
			return { API_URL: 'https://learn-in-public.herokuapp.com' }
	}
}

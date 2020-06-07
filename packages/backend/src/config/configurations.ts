export default () => ({
  CLIENT_HOST:
    process.env.NODE_ENV === 'dev' ? process.env.CLIENT_HOST_DEV : process.env.CLIENT_HOST_LOCAL,
  API_HOST: process.env.NODE_ENV === 'dev' ? process.env.API_HOST_DEV : process.env.API_HOST_LOCAL,
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

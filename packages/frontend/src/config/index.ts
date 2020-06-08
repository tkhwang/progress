export interface IClientConfig {
  CLIENT_HOST: string | undefined
  API_HOST: string | undefined
}

export default function (): IClientConfig {
  const env = process.env.REACT_APP_NODE_ENV || 'dev'
  switch (env) {
    case 'local':
      return {
        CLIENT_HOST: process.env.REACT_APP_CLIENT_HOST_LOCAL,
        API_HOST: process.env.REACT_APP_API_HOST_LOCAL,
      }
    case 'dev':
      return {
        CLIENT_HOST: process.env.REACT_APP_CLIENT_HOST_DEV,
        API_HOST: process.env.REACT_APP_API_HOST_DEV,
      }
    default:
      return {
        CLIENT_HOST: process.env.REACT_APP_CLIENT_HOST_DEV,
        API_HOST: process.env.REACT_APP_API_HOST_DEV,
      }
  }
}

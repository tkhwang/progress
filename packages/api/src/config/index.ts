export interface IClientConfig {
  CLIENT_HOST: string | undefined
  API_HOST: string | undefined
}

export default function (): IClientConfig {
  const env = process.env.REACT_APP_NODE_ENV || 'dev'
  switch (env) {
    case 'local':
      return {
        API_HOST: process.env.REACT_APP_API_HOST_LOCAL,
        CLIENT_HOST: process.env.REACT_APP_CLIENT_HOST_LOCAL,
      }
    case 'dev':
      return {
        API_HOST: process.env.REACT_APP_API_HOST_DEV,
        CLIENT_HOST: process.env.REACT_APP_CLIENT_HOST_DEV,
      }
    default:
      return {
        API_HOST: process.env.REACT_APP_API_HOST_DEV,
        CLIENT_HOST: process.env.REACT_APP_CLIENT_HOST_DEV,
      }
  }
}

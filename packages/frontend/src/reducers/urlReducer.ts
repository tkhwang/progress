import { UrlActions } from 'src/actions/urlActions'

type UrlState = {
  url: string
}

const initialState: UrlState = {
  url: '',
}

const UrlReducer = (state: UrlState = initialState, action: UrlActions) => {
  switch (action.type) {
    case 'URL/REGISTER':
      return {
        ...state,
        url: action.payload.url,
      }
    default:
      return state
  }
}

export default UrlReducer

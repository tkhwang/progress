import { combineReducers } from 'redux'
import countReducer from './countReducer'
import nameReducer from './nameReducer'
import urlReducer from './urlReducer'

const rootReducer = combineReducers({
  count: countReducer,
  name: nameReducer,
  url: urlReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer

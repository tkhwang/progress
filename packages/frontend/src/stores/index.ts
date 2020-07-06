import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from 'src/reducers/rootReducers'
import logger from 'redux-logger'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const store = createStore(
  rootReducer,
  // devToolsEnhancer({})
  composeEnhancers(applyMiddleware(logger))
)

export default store

import { rootReducer, InitialState, DispatchActions } from 'src/reducers/RootReducers'
import { createStore } from 'redux'

export const store = createStore<InitialState, DispatchActions, null, null>(rootReducer)

import { Action, Reducer } from 'redux'

export interface InitialState {
  name: string
  address: string
}

export const initialState: InitialState = {
  name: '',
  address: '',
}

export interface DispatchActions extends Action {
  payload: Partial<InitialState>
}

export const rootReducer: Reducer<InitialState, DispatchActions> = (state, action) => {
  return initialState
}

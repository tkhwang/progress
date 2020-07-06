import React, { Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from './reducers/rootReducers'
import { CountActions } from './actions/countActions'
import { NameActions } from './actions/nameActions'
function Counter() {
  const { count } = useSelector((state: AppState) => state.count)
  const { name } = useSelector((state: AppState) => state.name)

  const countDispatch = useDispatch<Dispatch<CountActions>>()
  const nameDispatch = useDispatch<Dispatch<NameActions>>()

  const handleIncrement = () => {
    countDispatch({ type: 'INCREMENT' })
  }

  const handleDecrement = () => {
    countDispatch({ type: 'DECREMENT' })
  }

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameDispatch({ type: 'SET_NAME', payload: e.target.value })
  }

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <input type="text" onChange={handleSetName} />
        {name}
      </div>
    </div>
  )
}
export default Counter

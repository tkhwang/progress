import React, { useContext } from 'react'
import { InterestsContext } from '../App'

export interface IInterestsProps {}

export const Interests = (props: IInterestsProps) => {
  const { interests } = useContext(InterestsContext)

  return (
    <div>
      <h1>Interests detail page</h1>
      {interests.map((i: string) => i)}
    </div>
  )
}

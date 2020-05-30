import React, { useContext } from 'react'
import { RootContext } from 'src/stores/RootContext'

export interface IInterestsProps {}

export const Interests = (props: IInterestsProps) => {
  const { interests } = useContext(RootContext)

  return (
    <div>
      <h1>Interests detail page</h1>
      {interests.map((i: string) => i)}
    </div>
  )
}

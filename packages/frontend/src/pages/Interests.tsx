import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

export interface IInterestsProps {}

export const Interests = observer((props: IInterestsProps) => {
  const [interests, setInterests] = useState<string[]>([])

  return (
    <div>
      <h1>Interests detail page</h1>
    </div>
  )
})

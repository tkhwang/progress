import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { UniqueKey } from 'src/services/UniqueKey'

export interface IRefreshProps {
  forceUpdate: (time: string) => void
}

export default function Refresh(props: IRefreshProps) {
  props.forceUpdate(UniqueKey.newKey())

  return <Redirect to="/" />
}

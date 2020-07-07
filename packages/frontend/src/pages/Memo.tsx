import * as React from 'react'
import { Divider } from 'antd'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BodyContainer from './BodyContainer'
import { AddNewBookmark } from 'src/components/AddNewBookmark'
import { useSelector } from 'react-redux'
import { AppState } from 'src/reducers/rootReducers'

export interface IMemoProps {}

export function Memo(props: IMemoProps) {
  const { url } = useSelector((state: AppState) => state.url)

  return (
    <BodyContainer>
      <AddNewBookmark url={url} />
    </BodyContainer>
  )
}

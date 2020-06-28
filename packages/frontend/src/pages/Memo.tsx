import * as React from 'react'
import { Divider } from 'antd'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BodyContainer from './BodyContainer'
import { AddNewBookmark } from 'src/components/AddNewBookmark'

export interface IMemoProps {}

export function Memo(props: IMemoProps) {
  return (
    <BodyContainer>
      <Breadcrumb>
        <Breadcrumb.Item href="/" active={true}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/interests">Interests</Breadcrumb.Item>
      </Breadcrumb>
      <h3>Bookmark</h3>
      <Divider />
      <AddNewBookmark />
    </BodyContainer>
  )
}

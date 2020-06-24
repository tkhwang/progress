import * as React from 'react'
import Input from 'antd/lib/input'
import { Timeline, Divider } from 'antd'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export interface IMemoProps {}

export function Memo(props: IMemoProps) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/" active={true}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/interests">Interests</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Memo</h1>
      <Input placeholder="Type URL" />
      <Divider />
      <Timeline mode="left">
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    </div>
  )
}

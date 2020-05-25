import * as React from 'react'
import { Card } from 'antd'
import moment from 'antd/node_modules/moment'

export interface IInterestCardProps {
  title: string
  description?: string
}

export function InterestCard(props: IInterestCardProps) {
  return (
    <>
      <Card title={`${props.title}`} style={{ width: 300 }}>
        {props.description}
      </Card>
    </>
  )
}

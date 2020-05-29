import { Card } from 'antd'
import * as React from 'react'

export interface IInterestCardProps {
  title: string
  description?: string
}

export function InterestCard(props: IInterestCardProps) {
  return (
    <>
      <Card title={`${props.title}`} style={{ width: 300 }}>
        {props && props.description && props.description}
      </Card>
    </>
  )
}

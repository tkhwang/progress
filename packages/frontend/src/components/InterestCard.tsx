import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import * as React from 'react'

export interface IInterestCardProps {
  title: string
  width: string
  description?: string
  image?: string
  onClick: () => void
}

export function InterestCard(props: IInterestCardProps) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: `${props.width}`, padding: 5 }}
        cover={<img alt={`${props.title}`} src={`${props.image}`} />}
        onClick={props.onClick}
      >
        <Meta title={`${props.title}`} description={`${props.description}`} />
      </Card>
    </div>
  )
}

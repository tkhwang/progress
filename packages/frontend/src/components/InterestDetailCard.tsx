import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import * as React from 'react'

export interface IInterestDetailCardProps {
  title: string
  width: string
  description?: string
  image?: string
  onClick?: () => void
}

export function InterestDetailCard(props: IInterestDetailCardProps) {
  return (
    <div>
      <Card
        hoverable={true}
        style={{ width: `${props.width}`, padding: 5 }}
        cover={<img alt={`${props.title}`} src={`${props.image}`} />}
        onClick={props.onClick}
      >
        <Meta title={`${props.title}`} description={`${props.description}`} />
      </Card>
    </div>
  )
}

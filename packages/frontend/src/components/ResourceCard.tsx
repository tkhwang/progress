import React, { CSSProperties } from 'react'
import { Card } from 'antd'

const { Meta } = Card
const gridStyle: CSSProperties = {
  width: '33%',
  textAlign: 'center',
  verticalAlign: 'middle',
}

export interface IResourceCardProps {
  title: string
  siteName?: string
  image?: string
  description?: string
}

export function ResourceCard(props: IResourceCardProps) {
  return (
    <React.Fragment>
      <Card style={gridStyle} cover={props.image ? <img src={`${props.image}`} /> : ''}>
        {props.siteName ? props.siteName : ''}
        <Meta title={props.title} description={props.description} />
      </Card>
    </React.Fragment>
  )
}

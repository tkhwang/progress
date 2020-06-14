import React, { CSSProperties } from 'react'
import { Card, Col, Row } from 'antd'
import styled from 'styled-components'
import moment from 'antd/node_modules/moment'

const { Meta } = Card

const gridStyle: CSSProperties = {
  width: '50%',
  textAlign: 'left',
  verticalAlign: 'middle',
  border: '1px solid',
  // margin: '5 px',
  padding: '16px',
}

export interface IResourceCardProps {
  title: string
  siteName?: string
  image?: string
  description?: string
}

export function ResourceCard(props: IResourceCardProps) {
  console.log('ResourceCard -> props', props)
  return (
    <React.Fragment>
      <Card.Grid style={gridStyle}>
        <div>
          <ul>
            <li className="font-roboto-condensed" style={{ fontSize: '20px' }}>
              {props.title}
            </li>
            <li>{props.siteName}</li>
          </ul>
          <div>
            <img style={{ width: '100%' }} src={`${props.image}`} />
          </div>
        </div>
      </Card.Grid>
    </React.Fragment>
  )
}

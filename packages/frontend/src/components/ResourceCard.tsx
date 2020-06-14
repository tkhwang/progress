import React, { CSSProperties } from 'react'
import { Card, Col, Row } from 'antd'
import styled from 'styled-components'
import moment from 'antd/node_modules/moment'

const { Meta } = Card

const gridStyle: CSSProperties = {
  width: '33%',
  textAlign: 'center',
  verticalAlign: 'middle',
  border: '1px solid',
  margin: '5 px',
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
      <div style={{ border: '1px solid', margin: '10px', padding: '10px' }}>
        <Row>
          <Col span={14}>
            <ul>
              <li>{props.siteName}</li>
              <li>{props.title}</li>
            </ul>
          </Col>
          <Col span={10}>
            <div>
              <img style={{ width: '90%' }} src={`${props.image}`} />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

import React, { CSSProperties } from 'react'
// import { Card, Col, Row } from 'antd'
import styled from 'styled-components'
import moment from 'antd/node_modules/moment'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

export interface IResourceCardProps {
  url: string
  title: string
  siteName?: string
  image?: string
  screenshot?: string
  description?: string
}

export function ResourceCard(props: IResourceCardProps) {
  console.log('ResourceCard -> props', props)
  return (
    <Card>
      <Card.Header>{`${props.siteName}`}</Card.Header>
      <a href={`${props.url}`}>
        <Card.Img style={{ height: '12rem' }} variant="top" src={`${props.image}`} />
        <Card.Body>
          <Card.Title>{`${props.title}`}</Card.Title>
          <Card.Text>{`${props.description}`}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  )
}

// ;<Card.Footer>
//   <Card.Img variant="top" src={`${props.screenshot}`} />
// </Card.Footer>

// ;<React.Fragment>
//   <Card.Grid style={gridStyle}>
//     <div>
//       <ul>
//         <li className="font-roboto-condensed" style={{ fontSize: '20px' }}>
//           {props.title}
//         </li>
//         <li>{props.siteName}</li>
//       </ul>
//       <div>
//         <img style={{ width: '100%' }} src={`${props.image}`} />
//         <img style={{ width: '100%' }} src={`${props.screenshot}`} />
//       </div>
//     </div>
//   </Card.Grid>
// </React.Fragment>

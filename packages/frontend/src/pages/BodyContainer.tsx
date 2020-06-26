import React, { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface IBodyContainerProps {
  children: ReactNode
}

export default function BodyContainer(props: IBodyContainerProps) {
  return (
    <Container>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
  )
}

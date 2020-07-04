import React from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export interface IInterestCardProps {
  key: string
  interest: string
  createdAt: string
}

export default function InterestCard(props: IInterestCardProps) {
  const onClick = () => {
    // tslint:disable-next-line:no-console
    console.log(props.interest)
  }

  return (
    <Card>
      <NavLink style={{ color: 'black' }} to={`/interest?interest=${props.interest}`}>
        <Card.Body>
          <Card.Text as="h3">{props.interest}</Card.Text>
        </Card.Body>
        <Card.Footer>{`${moment(props.createdAt).fromNow()}`}</Card.Footer>
      </NavLink>
    </Card>
  )
}

// <div style={{ fontSize: 30, fontFamily: 'Black Han Sans' }}></div>
// <hr />
// <div></div>

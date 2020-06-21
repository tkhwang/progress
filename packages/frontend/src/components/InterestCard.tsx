import React, { CSSProperties } from 'react'
import { Card } from 'antd'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const { Meta } = Card

const gridStyle: CSSProperties = {
  width: '32%',
  textAlign: 'center',
  fontSize: '50 px',
  border: '1px solid',
  margin: '5px',
}

export interface IInterestCardProps {
  key: string
  interest: string
  createdAt: string
}

export default function InterestCard(props: IInterestCardProps) {
  const onClick = () => {
    console.log(props.interest)
  }

  return (
    <React.Fragment>
      <Card.Grid style={gridStyle}>
        <NavLink style={{ color: 'black' }} to={`/interest?interest=${props.interest}`}>
          <div style={{ fontSize: 30, fontFamily: 'Black Han Sans' }}>{props.interest}</div>
          <hr />
          <div>{`${moment(props.createdAt).fromNow()}`}</div>
        </NavLink>
      </Card.Grid>
    </React.Fragment>
  )
}

import React, { CSSProperties } from 'react'
import { Card, Divider } from 'antd'
import moment from 'moment'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const { Meta } = Card

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const gridStyle: CSSProperties = {
  width: '33%',
  textAlign: 'center',
  fontSize: '50 px',
}

export interface IInterestCardProps {
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
        <NavLink style={{ color: 'black' }} to={`/interests?interest=${props.interest}`}>
          <div style={{ fontSize: 30, fontFamily: 'Black Han Sans' }}>{props.interest}</div>
          <hr />
          <div>{`${moment(props.createdAt).fromNow()}`}</div>
        </NavLink>
      </Card.Grid>
    </React.Fragment>
  )
}

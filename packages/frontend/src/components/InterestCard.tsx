import React, { CSSProperties } from 'react'
import { Card, Divider } from 'antd'
import moment from 'moment'
import styled from 'styled-components'

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
  // <Meta description={moment(props.createdAt).format('YYYY-MM-DD')} />
  return (
    <React.Fragment>
      <Card.Grid style={gridStyle}>
        <div style={{ fontSize: 30, fontFamily: 'Black Han Sans' }}>{props.interest}</div>
        <hr />
        <div>{`${moment(props.createdAt).fromNow()}`}</div>
      </Card.Grid>
    </React.Fragment>
  )
}

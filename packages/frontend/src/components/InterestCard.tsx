import React from 'react'
import { Card } from 'antd'
import moment from 'moment'
import styled from 'styled-components'

const { Meta } = Card

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const DivFlexRight = styled.div`
  text-align: right;
`

export interface IInterestCardProps {
  interest: string
  createdAt: string
}

export default function InterestCard(props: IInterestCardProps) {
  // <Meta description={moment(props.createdAt).format('YYYY-MM-DD')} />
  return (
    <React.Fragment>
      <Card title={props.interest}>
        <DivFlexRight>{`${moment(props.createdAt).format('YYYY-MM-DD')}`}</DivFlexRight>
      </Card>
    </React.Fragment>
  )
}

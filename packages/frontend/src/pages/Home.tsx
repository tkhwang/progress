import React, { useEffect, useState } from 'react'
import { useInterests } from 'src/hooks/useInterests'
import { InterestGetInterestsResult } from '@progress/api'
import InterestCard from 'src/components/InterestCard'
import styled from 'styled-components'
import { EyeOutlined } from '@ant-design/icons'
import { UniqueKey } from 'src/services/UniqueKey'

export interface IHomeProps {
  forceUpdate: (time: string) => void
}

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`
//   padding: 30px 30px 30px 30px;

export default function Home(props: IHomeProps) {
  const [interests, setInterests] = useInterests()
  console.log('Home -> interests', interests)

  useEffect(() => {
    props.forceUpdate(UniqueKey.newKey())
  }, [])

  return (
    <React.Fragment>
      <h1>
        <EyeOutlined /> Interests
      </h1>
      <DivFlex>
        {interests.map((interest: InterestGetInterestsResult) => (
          <InterestCard
            key={`${interest.interest}`}
            interest={`${interest.interest}`}
            createdAt={`${interest.createdAt}`}
          />
        ))}
      </DivFlex>
    </React.Fragment>
  )
}

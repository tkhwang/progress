import React from 'react'
import { useInterests } from 'src/hooks/useInterests'
import { InterestGetInterestsResult } from '@progress/api'
import InterestCard from 'src/components/InterestCard'
import styled from 'styled-components'

export interface IHomeProps {}

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`
//   padding: 30px 30px 30px 30px;

export default function Home(props: IHomeProps) {
  const [interests, setInterests] = useInterests()
  console.log('Home -> interests', interests)

  return (
    <React.Fragment>
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

import React, { useEffect, useState } from 'react'
import { AddNewInterestCard } from './AddNewInterestCard'
import { AddNewLink } from './AddNewLink'
import { APIS, InterestGetInterestsRequest, InterestGetInterestsResult } from '@progress/api'
import { InterestDetailCard } from './InterestDetailCard'
import { UniqueKey } from 'src/services/UniqueKey'
import { InterestCard } from './InterestCard'

export interface IMeProps {
  forceUpdate: (time: string) => void
}

export function Lip(props: IMeProps) {
  const [modalVisible, setModalVisible] = useState(false)

  const [interests, setInterests] = useState([])
  useEffect(() => {
    props.forceUpdate(UniqueKey.newKey())

    const apis = new APIS.Interest()
    const fetchData = async () => {
      const param = new InterestGetInterestsRequest()
      param.user = 1
      const data = await apis.getInterests(param)
      setInterests(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Interests</h1>
      <div className="flexbox-container">
        {interests.map((interest: InterestGetInterestsResult) => (
          <InterestCard title={`${interest.interest}`} description={`${interest.createdAt}`} />
        ))}
      </div>
      <AddNewInterestCard
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onClick={() => setModalVisible(true)}
      />
      <hr />
      <h1>Add New Link</h1>
      <AddNewLink />
    </div>
  )
}

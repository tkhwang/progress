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
  const [interests, setInterests] = useState<string[]>([])
  const [rawInterests, setRawInterests] = useState([])

  useEffect(() => {
    props.forceUpdate(UniqueKey.newKey())

    const apis = new APIS.Interest()
    const fetchData = async () => {
      const param = new InterestGetInterestsRequest()
      param.user = 1
      const data = await apis.getInterests(param)
      const arrayOfInterests = data.map((d: any) => d.interest)
      console.log('fetchData -> data', data)
      setRawInterests(data)
      setInterests([...interests, ...arrayOfInterests])
      console.log('Lip -> interests', interests)
    }
    fetchData()
  }, interests)

  return (
    <div>
      <h1>Interests</h1>
      <div className="flexbox-container">
        {rawInterests.map((int: InterestGetInterestsResult) => (
          <InterestCard title={`${int.interest}`} description={`${int.createdAt}`} />
        ))}
      </div>
      <AddNewInterestCard
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onClick={() => setModalVisible(true)}
        interests={interests}
        setInterests={setInterests}
      />
    </div>
  )
}

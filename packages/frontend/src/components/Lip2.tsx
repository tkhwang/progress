import { APIS, InterestGetInterestsRequest, InterestGetInterestsResult } from '@progress/api'
import React, { useEffect, useState } from 'react'
import { UniqueKey } from 'src/services/UniqueKey'
import { AddNewInterestCard } from './AddNewInterestCard'
import { InterestCard } from './InterestCard'

export interface IMeProps {
  forceUpdate: (time: string) => void
}

export function Lip2(props: IMeProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const [interests, setInterests] = useState<string[]>([])
  const [rawInterests, setRawInterests] = useState([])

  useEffect(() => {
    props.forceUpdate(UniqueKey.newKey())

    const apis = new APIS.Interest()
    const fetchData = async () => {
      const param = new InterestGetInterestsRequest()
      param.user = 1
      const [data, error] = await apis.getInterests(param)
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

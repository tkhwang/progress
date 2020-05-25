import React, { useEffect, useState } from 'react'
import { AddNewInterestCard } from './AddNewInterestCard'
import { AddNewLink } from './AddNewLink'
import { APIS, InterestGetInterestsRequest } from '@progress/api'
import { InterestCard } from './InterestCard'
import { UniqueKey } from 'src/services/UniqueKey'

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
        {interests.map(interest => (
          <InterestCard
            title={`${interest}`}
            width="100%"
            description="Add fields of interest these days : (eg) python, nlp, typescript, ..."
          />
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

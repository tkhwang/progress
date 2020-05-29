import { APIS, InterestGetInterestsRequest } from '@progress/api'
import React, { useEffect, useState } from 'react'
import { AuthService } from 'src/services/AuthService'
import { UniqueKey } from 'src/services/UniqueKey'
import { AddNewInterestCard } from './AddNewInterestCard'
import { InterestCard } from './InterestCard'

export interface ILipProps {
  forceUpdate: (time: string) => void
}

export function Lip(props: ILipProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const [interests, setInterests] = useState<string[]>([])

  useEffect(() => {
    props.forceUpdate(UniqueKey.newKey())
  }, [])

  useEffect(() => {
    const apis = new APIS.Interest()
    const fetchData = async () => {
      const user: any = AuthService.getCurrentUser()
      if (user) {
        const params = new InterestGetInterestsRequest()
        params.user = user.id
        const data = await apis.getInterests(params)
        setInterests([...interests, ...data.map((d: any) => d.interest)])
      }
    }
    fetchData()
  }, interests)

  return (
    <div>
      <h1>Interest</h1>
      <div className="flexbox-container">
        {interests.map((i: any) => (
          <InterestCard title={i} />
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

import { APIS, InterestGetInterestsRequest } from '@progress/api'
import { Card } from 'antd'
import React, { CSSProperties, useEffect, useState } from 'react'
import { AuthService } from 'src/services/AuthService'
import { UniqueKey } from 'src/services/UniqueKey'
import { AddNewInterestCard } from './AddNewInterestCard'

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

  const gridStyle: CSSProperties = {
    width: '33%',
    textAlign: 'center',
  }

  return (
    <div>
      <Card title="Interest">
        {interests.map((i: any) => (
          <Card.Grid style={gridStyle}>{i}</Card.Grid>
        ))}
      </Card>
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

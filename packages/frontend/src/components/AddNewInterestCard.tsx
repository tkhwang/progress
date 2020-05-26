import { InterestDetailCard } from './InterestDetailCard'
import config from 'src/config'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { UniqueKey } from 'src/services/UniqueKey'
import { APIS } from '@progress/api'
import Input from 'antd/lib/input'
import { AuthService } from 'src/services/AuthService'

export interface IAddNewInterestCardProps {
  modalVisible: boolean
  setModalVisible: (status: boolean) => void
  onClick: () => void
  interests: string[]
  setInterests: any
}

export function AddNewInterestCard(props: IAddNewInterestCardProps) {
  const { PROGRESS_URL } = config()

  const [interest, setInterest] = useState('')
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())

  const handleOk = () => {
    setUniqueKey(UniqueKey.newKey())
    props.setModalVisible(false)
    props.setInterests([...props.interests, interest])
  }

  const handleCancel = () => {
    setUniqueKey(UniqueKey.newKey())
    props.setModalVisible(false)
  }

  const onRegisterInterest = async (int: string) => {
    const apis = new APIS.Interest()
    const user: any = AuthService.getCurrentUser()
    console.log('onRegisterInterest -> user', user)
    try {
      await apis.postInterest({ interest: int, user: user.id })
    } catch (error) {}
  }

  return (
    <div>
      <InterestDetailCard
        title="add new interest"
        width="20%"
        image={`${PROGRESS_URL}/image/add2.svg`}
        description="Add fields of interest these days : (eg) python, nlp, typescript, ..."
        onClick={props.onClick}
      />
      <Modal
        title="Add new interest"
        visible={props.modalVisible}
        onOk={() => {
          onRegisterInterest(interest)
          handleOk()
        }}
        onCancel={handleCancel}
      >
        <Input
          key={uniqueKey}
          placeholder="Add your interest."
          onChange={(e: any) => {
            setInterest(e.target.value)
          }}
        />
      </Modal>
    </div>
  )
}

import { InterestDetailCard } from './InterestDetailCard'
import config from 'src/config'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import Search from 'antd/lib/input/Search'
import { UniqueKey } from 'src/services/UniqueKey'
import { APIS } from '@progress/api'

export interface IAddNewInterestCardProps {
  modalVisible: boolean
  setModalVisible: (status: boolean) => void
  onClick: () => void
}

export function AddNewInterestCard(props: IAddNewInterestCardProps) {
  const { PROGRESS_URL } = config()

  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())

  const handleOk = () => {
    setUniqueKey(UniqueKey.newKey())
    props.setModalVisible(false)
  }
  const handleCancel = () => {
    setUniqueKey(UniqueKey.newKey())
    props.setModalVisible(false)
  }

  const onRegisterInterest = async (interest: string) => {
    const apis = new APIS.Interest()
    try {
      await apis.postInterest({ interest, user: 1 })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <InterestDetailCard
        title="add new interest"
        width="100%"
        image={`${PROGRESS_URL}/image/add2.svg`}
        description="Add fields of interest these days : (eg) python, nlp, typescript, ..."
        onClick={props.onClick}
      />
      <Modal
        title="Add new interest"
        visible={props.modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Search
          key={uniqueKey}
          defaultValue=""
          placeholder="Add your interest."
          onSearch={value => onRegisterInterest(value)}
          style={{ width: '100%' }}
        />
      </Modal>
    </div>
  )
}

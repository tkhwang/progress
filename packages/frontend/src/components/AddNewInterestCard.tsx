import { InterestCard } from './InterestCard'
import config from 'src/config'
import Modal from 'antd/lib/modal/Modal'
import React from 'react'

export interface IAddNewInterestCardProps {
  modalVisible: boolean
  setModalVisible: (status: boolean) => void
  onClick: () => void
}

export function AddNewInterestCard(props: IAddNewInterestCardProps) {
  const { PROGRESS_URL } = config()
  const handleOk = (e: any) => props.setModalVisible(false)
  const handleCancel = (e: any) => props.setModalVisible(false)

  return (
    <div>
      <InterestCard
        title="add new interest"
        width="20%"
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

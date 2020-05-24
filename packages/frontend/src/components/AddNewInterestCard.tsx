import { InterestCard } from './InterestCard'
import config from 'src/config'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import Search from 'antd/lib/input/Search'
import { LottieComp } from './LottieComp'
import animationDataOnlineClass from '../data/21903-online-class-animation.json'
import animationDataWaiting from '../data/17723-waitting.json'

export interface IAddNewInterestCardProps {
  modalVisible: boolean
  setModalVisible: (status: boolean) => void
  onClick: () => void
}

export function AddNewInterestCard(props: IAddNewInterestCardProps) {
  const { PROGRESS_URL } = config()

  const handleOk = () => {
    props.setModalVisible(false)
  }
  const handleCancel = () => {
    props.setModalVisible(false)
  }

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
        <Search
          placeholder="Add fields of interest these days : (eg) python, nlp, typescript, ..."
          onSearch={value => {}}
          style={{ width: '100%' }}
        />
      </Modal>
    </div>
  )
}

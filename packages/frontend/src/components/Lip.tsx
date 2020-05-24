import { BorderOuterOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { AddNewInterestCard } from './AddNewInterestCard'
import { AddNewLink } from './AddNewLink'
import Modal from 'antd/lib/modal/Modal'

export interface IMeProps {
  forceUpdate: (time: string) => void
}

export function Lip(props: IMeProps) {
  useEffect(() => {
    props.forceUpdate(new Date().getTime().toString())
  }, [])

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div>
      <h1>Interests</h1>
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

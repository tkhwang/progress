import { APIS } from '@progress/api'
import { Card, Input } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import Title from 'antd/lib/typography/Title'
import React, { CSSProperties, useEffect, useState } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useInterests } from 'src/hooks/useInterests'
import { AuthService } from 'src/services/AuthService'
import { UniqueKey } from 'src/services/UniqueKey'
import InterestCard from 'src/components/InterestCard'

const gridStyle: CSSProperties = {
  width: '33%',
  height: '133px',
  textAlign: 'center',
  verticalAlign: 'middle',
}

export interface ILipProps {
  forceUpdate: (time: string) => void
}

export const Lip = (props: ILipProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())
  const [interest, setInterest] = useState('')
  // const [interests, setInterests] = useState<string[]>([])
  const [interests, setInterests] = useInterests()

  useEffect(() => {
    props.forceUpdate(UniqueKey.newKey())
  }, [])

  const handleOk = () => {
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
    // setInterests([...interests.filter((d: string) => d !== 'Add new'), interest, 'Add new'])
  }

  const handleCancel = () => {
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
  }

  const onRegisterInterest = async (int: string) => {
    const apis = new APIS.Interest()
    const user: any = AuthService.getCurrentUser()

    try {
      await apis.postInterest({ interest: int, user: user.id })
    } catch (error) {}
  }

  return (
    <div>
      <Card title={<Title level={1}>Interest</Title>}>
        {interests.map((i: any) => (
          <Card.Grid style={gridStyle} key={`${i.id}`}>
            {i === 'Add new' ? (
              <div onClick={(e) => setModalVisible(true)}>
                <Title level={1}>
                  <AiOutlineAppstoreAdd />
                </Title>
                {`Add new`}
              </div>
            ) : (
              <NavLink to={`/interests?interest=${i}`}>
                <Title level={4}>
                  <span className="font-roboto-condensed">{i}</span>
                </Title>
              </NavLink>
            )}
          </Card.Grid>
        ))}
      </Card>
      <Modal
        title="Add new interest"
        visible={modalVisible}
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

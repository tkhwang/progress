import React, { useEffect, useState } from 'react'
import { useInterests } from 'src/hooks/useInterests'
import { InterestGetInterestsResult, APIS } from '@progress/api'
import InterestCard from 'src/components/InterestCard'
import styled from 'styled-components'
import { EyeOutlined } from '@ant-design/icons'
import { UniqueKey } from 'src/services/UniqueKey'
import { Modal, Input, Button } from 'antd'
import { AuthService } from 'src/services/AuthService'
import Title from 'antd/lib/typography/Title'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

export interface IHomeProps {
  forceUpdate: (time: string) => void
}

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`
//   padding: 30px 30px 30px 30px;

export default function Home(props: IHomeProps) {
  const [interest, setInterest] = useState('')
  const [interests, setInterests] = useInterests()
  const [modalVisible, setModalVisible] = useState(false)
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())
  console.log('Home -> interests', interests)

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
      const newInterest = [{ interest, createdAt: new Date() }]

      setInterests([...interests, ...newInterest])
    } catch (error) {}
  }

  return (
    <React.Fragment>
      <h1>
        <EyeOutlined /> Interests
      </h1>
      <div onClick={(e) => setModalVisible(true)}>
        <Button style={{ width: '30%' }} type="primary">
          Add New Interest
        </Button>
      </div>
      <DivFlex key={uniqueKey}>
        {interests.map((i: InterestGetInterestsResult) => (
          <InterestCard
            key={`${i.interest}`}
            interest={`${i.interest}`}
            createdAt={`${i.createdAt}`}
          />
        ))}
      </DivFlex>
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
    </React.Fragment>
  )
}

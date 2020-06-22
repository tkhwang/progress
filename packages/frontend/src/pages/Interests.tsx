import React, { useEffect, useState } from 'react'
import { useInterests } from 'src/hooks/useInterests'
import { InterestGetInterestsResult, APIS } from '@progress/api'
import InterestCard from 'src/components/InterestCard'
import styled from 'styled-components'
import { EyeOutlined } from '@ant-design/icons'
import { UniqueKey } from 'src/services/UniqueKey'
import { Modal, Input, Button, Row, Col } from 'antd'
import { AuthService } from 'src/services/AuthService'
import Title from 'antd/lib/typography/Title'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'

export interface IInterestsProps {
  forceUpdate: (time: string) => void
}

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`
//   padding: 30px 30px 30px 30px;

export default function Interests(props: IInterestsProps) {
  const [interest, setInterest] = useState('')
  const [interests, setInterests] = useInterests()
  const [modalVisible, setModalVisible] = useState(false)
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())
  console.log('Interests -> interests', interests)

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
      <Row>
        <Col span={12}>
          <h1>
            <EyeOutlined /> Interests
          </h1>
        </Col>
        <Col span={12}>
          <Button onClick={(e) => setModalVisible(true)} style={{ width: '100%' }} type="primary">
            Add New Interest
          </Button>
        </Col>
      </Row>
      <CardDeck>
        {interests.map((i: InterestGetInterestsResult) => (
          <InterestCard
            key={`${i.interest}`}
            interest={`${i.interest}`}
            createdAt={`${i.createdAt}`}
          />
        ))}
      </CardDeck>
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

import { ResourceCardModel, GetResourceRequest } from '@progress/api/models'
import { Card, Modal, Tabs } from 'antd'
import querystring from 'query-string'
import React, { CSSProperties, useContext, useEffect, useState } from 'react'
import { AddNewResource } from 'src/components/AddNewResource'
import config from 'src/config'
import { UniqueKey } from 'src/services/UniqueKey'
import { RootContext } from 'src/stores/RootContext'
// import { useResources } from '../hooks/useResources'
import { APIS, GetResourceResponse } from '@progress/api'
import styled from 'styled-components'
import { ResourceCard } from 'src/components/ResourceCard'

const { TabPane } = Tabs
const { Meta } = Card

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 30px 30px 30px 30px;
`

export interface IInterestsProps {
  location?: any
  history?: any
}

const gridStyle: CSSProperties = {
  width: '33%',
  height: '20%',
  textAlign: 'center',
  verticalAlign: 'middle',
}

export const InterestsOld = (props: IInterestsProps) => {
  const { CLIENT_HOST } = config()
  const { interests } = useContext(RootContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())
  const [activeInterest, setActiveInterest] = useState('')
  const [resources, setResources] = useState<ResourceCardModel[]>([
    {
      title: `+ Add new resource`,
      // images: [`${CLIENT_HOST}/image/cloud-computing.png`],
    },
  ])

  useEffect(() => {
    const { interest } = querystring.parse(props.location.search)
    if (interest) setActiveInterest(interest as string)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const apis = new APIS.Resource()
      const param = new GetResourceRequest()
      param.interest = activeInterest
      const { success, data, error } = await apis.getResource(param)
      if (success && data) {
        setResources([...resources, ...data])
      }
    }
    fetchData()
  }, [])

  const onChange = (interest: string) => {
    setActiveInterest(interest)
  }

  const onRegister = () => {}

  const handleOk = () => {
    onRegister()
    Modal.success({
      content: `New resource was added.`,
    })
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
  }

  const handleCancel = () => {
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
  }

  // <div onClick={() => setModalVisible(true)}>
  // </div>
  return (
    <div>
      <Tabs activeKey={activeInterest} onChange={onChange} type="card">
        {/* {interests.map((interest: string) => (
          <TabPane tab={interest} key={interest} />
        ))} */}
        {resources.map((resource: ResourceCardModel) => (
          <span onClick={() => setModalVisible(true)} key={`${resource.title}`}>
            <Card style={gridStyle} cover={resource.image ? <img src={`${resource.image}`} /> : ''}>
              <Meta title={resource.title} description={resource.description} />
            </Card>
          </span>
        ))}
      </Tabs>
      <DivFlex>
        {resources.map((resource: ResourceCardModel) => (
          <ResourceCard
            key={resource.title}
            title={resource.title ? resource.title : ''}
            image={resource.image ? resource.image : ''}
            description={resource.description ? resource.description : ''}
          />
        ))}
      </DivFlex>
      <AddNewResource
        key={uniqueKey}
        activeInterest={activeInterest}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  )
}

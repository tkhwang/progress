import * as React from 'react'
import { useEffect, useState } from 'react'
import { APIS, GetResourceRequest, ResourceCardModel } from '@progress/api'
import querystring from 'query-string'
import { ResourceCard } from 'src/components/ResourceCard'
import { SnippetsOutlined, FormOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { AddNewResource } from 'src/components/AddNewResource'
import { UniqueKey } from 'src/services/UniqueKey'
import Modal from 'antd/lib/modal'
import Button from 'antd/lib/button'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'antd'

export interface IInterestProps {
  location?: any
  history?: any
}

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  /* margin: 30px 30px 30px 30px; */
`

export default function Interest(props: IInterestProps) {
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())
  const [activeInterest, setActiveInterest] = useState('')
  const [resources, setResources] = useState<ResourceCardModel[]>([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const fetchData = async (selectedInterest: string) => {
      const apis = new APIS.Resource()
      const param = new GetResourceRequest()
      param.interest = selectedInterest
      // tslint:disable-next-line:no-console
      console.log('Interests : fetchData -> selectedInterest', selectedInterest)
      const { success, data, error } = await apis.getResource(param)
      if (success && data) {
        // tslint:disable-next-line:no-console
        console.log('Interests : fetchData -> data', data)
        setResources([...resources, ...data])
      }
    }

    const { interest } = querystring.parse(props.location.search)
    if (interest) {
      setActiveInterest(interest as string)
      fetchData(interest as string)
    }
  }, resources)

  const handleOk = () => {
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

  return (
    <React.Fragment>
      <Row>
        <Col span={12}>
          <h1>
            <FormOutlined /> <NavLink to="/">Interest</NavLink> {` > ${activeInterest}`}
          </h1>
        </Col>
        <Col span={12}>
          <Button onClick={(e) => setModalVisible(true)} style={{ width: '100%' }} type="primary">
            Add New Resource on {`${activeInterest}`}
          </Button>
        </Col>
      </Row>
      <DivFlex>
        {resources.map((resource: ResourceCardModel) => (
          <ResourceCard
            key={resource.title}
            title={resource.title ? resource.title : ''}
            siteName={resource.siteName ? resource.siteName : ''}
            image={resource.image ? resource.image : ''}
          />
        ))}
      </DivFlex>
      <AddNewResource
        key={uniqueKey}
        activeInterest={activeInterest}
        resources={resources}
        setResources={setResources}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </React.Fragment>
  )
}

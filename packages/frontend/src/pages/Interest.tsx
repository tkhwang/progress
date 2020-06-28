import * as React from 'react'
import { useEffect, useState } from 'react'
import { APIS, GetResourceRequest, ResourceCardModel } from '@progress/api'
import querystring from 'query-string'
import { FormOutlined } from '@ant-design/icons'
import { AddNewResource } from 'src/components/AddNewResource'
import { UniqueKey } from 'src/services/UniqueKey'
import Modal from 'antd/lib/modal'
import { NavLink } from 'react-router-dom'
import CardColumns from 'react-bootstrap/CardColumns'
import { ResourceCard } from 'src/components/ResourceCard'
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BodyContainer from './BodyContainer'

export interface IInterestProps {
  location?: any
  history?: any
}

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
    <BodyContainer>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/interests">Interests</Breadcrumb.Item>
        <Breadcrumb.Item href="/interest" active={true}>
          Interest
        </Breadcrumb.Item>
      </Breadcrumb>
      <h3>
        <FormOutlined /> <NavLink to="/interests">Interests</NavLink> {` > ${activeInterest}`}
      </h3>
      <Button onClick={() => setModalVisible(true)} variant="outline-primary">
        [+] Add
      </Button>
      <CardColumns>
        {resources.map((resource: ResourceCardModel) => (
          <ResourceCard
            key={resource.title}
            url={resource.url ? resource.url : ''}
            title={resource.title ? resource.title : ''}
            siteName={resource.siteName ? resource.siteName : ''}
            image={resource.image ? resource.image : ''}
            description={resource.description ? resource.description : ''}
            screenshot={resource.screenshot ? resource.screenshot : ''}
          />
        ))}
      </CardColumns>
      <AddNewResource
        key={uniqueKey}
        activeInterest={activeInterest}
        resources={resources}
        setResources={setResources}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </BodyContainer>
  )
}

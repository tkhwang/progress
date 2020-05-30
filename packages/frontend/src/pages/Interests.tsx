import { Card, Modal, Tabs } from 'antd'
import querystring from 'query-string'
import React, { CSSProperties, useContext, useEffect, useState } from 'react'
import { AddNewResource } from 'src/components/AddNewResource'
import config from 'src/config'
import { UniqueKey } from 'src/services/UniqueKey'
import { RootContext } from 'src/stores/RootContext'

const { TabPane } = Tabs
const { Meta } = Card

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

export const Interests = (props: IInterestsProps) => {
  const { PROGRESS_URL } = config()

  const { interests } = useContext(RootContext)
  const [active, setActive] = useState('')
  const [resources, setResources] = useState<InterestResourceCardModel[]>([
    {
      title: `+ Add new resource`,
      images: [`${PROGRESS_URL}/image/cloud-computing.png`],
    },
  ])

  const [modalVisible, setModalVisible] = useState(false)
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())

  useEffect(() => {
    const { interest } = querystring.parse(props.location.search)
    if (interest) setActive(interest as string)
  }, [])

  const onChange = (interest: string) => {
    setActive(interest)
  }

  const handleOk = () => {
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
  }

  const handleCancel = () => {
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
  }

  // <AddNewInterest />
  return (
    <div>
      <Tabs activeKey={active} onChange={onChange} type="card">
        {interests.map((interest: string) => (
          <TabPane tab={interest} key={interest}></TabPane>
        ))}
        {resources.map((resource: InterestResourceCardModel) => (
          <div onClick={() => setModalVisible(true)}>
            <Card
              cover={
                resource.images && resource.images.length ? (
                  <img src={`${resource.images[0]}`} />
                ) : (
                  ''
                )
              }
              style={gridStyle}
            >
              <Meta title={resource.title} description={resource.description} />
            </Card>
          </div>
        ))}
      </Tabs>
      <Modal
        title="Add new resource"
        width="60%"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddNewResource key={uniqueKey} />
      </Modal>
    </div>
  )
}

export interface InterestResourceCardModel {
  title: string
  siteName?: string
  description?: string
  mediaType?: string
  images?: string[]
  videos?: string
}

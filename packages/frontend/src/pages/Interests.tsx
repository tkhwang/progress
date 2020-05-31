import { ResourceCardModel } from '@progress/api/models'
import { Card, Tabs } from 'antd'
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
  width: '50%',
  height: '20%',
  textAlign: 'center',
  verticalAlign: 'middle',
}

export const Interests = (props: IInterestsProps) => {
  const { PROGRESS_URL } = config()
  const { interests } = useContext(RootContext)

  const [modalVisible, setModalVisible] = useState(false)
  const [uniqueKey, setUniqueKey] = useState(UniqueKey.newKey())
  const [active, setActive] = useState('')
  const [resources] = useState<ResourceCardModel[]>([
    {
      title: `+ Add new resource`,
      // images: [`${PROGRESS_URL}/image/cloud-computing.png`],
    },
  ])

  useEffect(() => {
    const { interest } = querystring.parse(props.location.search)
    if (interest) setActive(interest as string)
  }, [])

  const onChange = (interest: string) => {
    setActive(interest)
  }

  const onRegister = () => {}

  const handleOk = () => {
    onRegister()
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
  }

  const handleCancel = () => {
    setUniqueKey(UniqueKey.newKey())
    setModalVisible(false)
  }

  return (
    <div>
      <Tabs activeKey={active} onChange={onChange} type="card">
        {interests.map((interest: string) => (
          <TabPane tab={interest} key={interest}></TabPane>
        ))}
        {resources.map((resource: ResourceCardModel) => (
          <div onClick={() => setModalVisible(true)}>
            <Card cover={resource.image ? <img src={`${resource.image}`} /> : ''} style={gridStyle}>
              <Meta title={resource.title} description={resource.description} />
            </Card>
          </div>
        ))}
      </Tabs>
      <AddNewResource visible={modalVisible} onOk={handleOk} onCancel={handleCancel} />
    </div>
  )
}

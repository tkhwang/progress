import { Tabs } from 'antd'
import querystring from 'query-string'
import React, { useContext, useEffect, useState } from 'react'
import { RootContext } from 'src/stores/RootContext'

const { TabPane } = Tabs
export interface IInterestsProps {
  location?: any
  history?: any
}

export const Interests = (props: IInterestsProps) => {
  const { interests } = useContext(RootContext)
  const [active, setActive] = useState('')

  const onChange = (interest: string) => {
    setActive(interest)
  }

  useEffect(() => {
    const { interest } = querystring.parse(props.location.search)
    if (interest) setActive(interest as string)
  }, [])

  return (
    <div>
      <Tabs activeKey={active} onChange={onChange} type="card">
        {interests.map((interest: string) => (
          <TabPane tab={interest} key={interest}>
            Content of Tab Pane 1
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

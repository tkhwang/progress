import { BorderOuterOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect, useState } from 'react'
import config from 'src/config'
import { InterestCard } from './IntrestCard'
import Search from 'antd/lib/input/Search'
import { APIS, PostUrlGetInfoResponse } from '@progress/api'

export interface IMeProps {
  forceUpdate: (time: string) => void
}

export function Lip(props: IMeProps) {
  useEffect(() => {
    props.forceUpdate(new Date().getTime().toString())
  }, [])

  const extractUrlInfo = async (url: string) => {
    const apis = new APIS.Url()
    return apis.postUrlInfo({ url })
  }

  const { PROGRESS_URL } = config()

  return (
    <div>
      <h1>
        <BorderOuterOutlined />
        <InterestCard
          title="add interest"
          width="200px"
          image={`${PROGRESS_URL}/image/add.svg`}
          description="add interest"
        />
        <Search
          placeholder="Enter url of your current learning material on interests."
          onSearch={(value: string) => extractUrlInfo(value)}
          enterButton="Add"
          size="large"
        />
      </h1>
    </div>
  )
}

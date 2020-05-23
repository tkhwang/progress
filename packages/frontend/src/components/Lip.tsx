import { BorderOuterOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect, useState } from 'react'
import config from 'src/config'
import { InterestCard } from './IntrestCard'
import Search from 'antd/lib/input/Search'

export interface IMeProps {
  forceUpdate: (time: string) => void
}

export function Lip(props: IMeProps) {
  useEffect(() => {
    props.forceUpdate(new Date().getTime().toString())
  }, [])

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
          onSearch={value => console.log(value)}
          enterButton="Add"
          size="large"
        />
      </h1>
    </div>
  )
}

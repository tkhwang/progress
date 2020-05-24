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

  const [loading, setLoading] = useState(false)
  const [urlTitle, setUrlTitle] = useState('')
  const [urlDescription, setUrlDescription] = useState('')
  const [urlSiteName, setUrlSiteName] = useState('')
  const [urlImages, setUrlImages] = useState('')

  const clearContents = () => {
    setLoading(true)
    setUrlTitle('')
    setUrlDescription('')
    setUrlImages('')
  }

  const extractUrlInfo = async (url: string) => {
    clearContents()

    const apis = new APIS.Url()
    const { title, siteName, description, mediaType, images, videos } = await apis.postUrlInfo({
      url,
    })
    if (title) setUrlTitle(title)
    if (description) setUrlDescription(description)
    if (siteName) setUrlSiteName(siteName)
    if (images && images.length) setUrlImages(images[0])
    setLoading(false)
  }

  const { PROGRESS_URL } = config()

  return (
    <div>
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
      <h3>{urlSiteName}</h3>
      {urlTitle ? (
        <Card loading={loading} hoverable style={{ width: '100%' }} cover={<img src={urlImages} />}>
          <Meta title={urlTitle} description={urlDescription} />
        </Card>
      ) : null}
    </div>
  )
}

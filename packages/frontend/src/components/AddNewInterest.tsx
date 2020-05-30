import { APIS } from '@progress/api'
import { Button, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'

export interface IAddNewInterestProps {}

export function AddNewInterest(props: IAddNewInterestProps) {
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
  return (
    <div>
      <Search
        placeholder="Enter url of your current learning material on interests."
        onSearch={(value: string) => extractUrlInfo(value)}
        enterButton="check"
        size="large"
      />
      <h3>{urlSiteName}</h3>
      {urlTitle ? (
        <React.Fragment>
          <Card
            loading={loading}
            hoverable
            style={{ width: '100%' }}
            cover={<img src={urlImages} />}
          >
            <Meta title={urlTitle} description={urlDescription} />
          </Card>
          <Button type="primary" style={{ width: '100%' }}>
            Register
          </Button>
        </React.Fragment>
      ) : null}
    </div>
  )
}

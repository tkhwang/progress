import { APIS } from '@progress/api'
import { Card, Col, Input, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Search from 'antd/lib/input/Search'
import moment from 'antd/node_modules/moment'
import React, { useState } from 'react'

const { TextArea } = Input

export interface IAddNewResourceProps {}

export function AddNewResource(props: IAddNewResourceProps) {
  const [loading, setLoading] = useState(false)
  const [urlTitle, setUrlTitle] = useState('')
  const [, setInputUrlTitle] = useState('')
  const [urlDescription, setUrlDescription] = useState('')
  const [, setInputUrlDescription] = useState('')
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
    if (title) {
      setUrlTitle(title)
      setInputUrlTitle(title)
    }
    if (description) {
      setUrlDescription(description)
      setInputUrlDescription(description)
    }
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

      {urlTitle ? (
        <React.Fragment>
          <Card
            loading={loading}
            hoverable
            style={{ width: '100%' }}
            cover={<img src={urlImages} />}
          >
            <Meta className={urlSiteName} title={urlTitle} description={urlDescription} />
          </Card>
          <div style={{ margin: '20px' }}>
            <Row>
              <Col span={4}>Site</Col>
              <Col span={20}>
                <h3>{urlSiteName}</h3>
              </Col>
            </Row>
            <Row>
              <Col span={4}>Title</Col>
              <Col span={20}>
                <TextArea value={urlTitle} onChange={e => setUrlTitle(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col span={4}>Description</Col>
              <Col span={20}>
                <TextArea
                  value={urlDescription}
                  onChange={e => setUrlDescription(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col span={4}>Date</Col>
              <Col span={20}>
                <Input
                  value={moment().format('YYYY-MM-DD HH:mm')}
                  onChange={e => setUrlDescription(e.target.value)}
                />
              </Col>
            </Row>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  )
}

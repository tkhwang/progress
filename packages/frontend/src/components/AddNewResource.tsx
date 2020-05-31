import { APIS, PostResourceRequest } from '@progress/api'
import { Card, Col, Input, Modal, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Search from 'antd/lib/input/Search'
import moment from 'antd/node_modules/moment'
import React, { useContext, useState } from 'react'
import { RootContext } from 'src/stores/RootContext'

const { TextArea } = Input

export interface IAddNewResourceProps {
  visible: boolean
  onOk: () => void
  onCancel: () => void
}

export function AddNewResource(props: IAddNewResourceProps) {
  const { user } = useContext(RootContext)
  console.log('AddNewResource -> user', user)

  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [urlTitle, setUrlTitle] = useState('')
  const [urlDescription, setUrlDescription] = useState('')
  const [urlSiteName, setUrlSiteName] = useState('')
  const [urlImages, setUrlImages] = useState('')
  const [urlMediaType, setUrlMediaType] = useState('')
  const [urlContentType, setUrlContentType] = useState('')

  const clearContents = () => {
    setLoading(true)
    setUrl('')
    setUrlTitle('')
    setUrlDescription('')
    setUrlImages('')
    setUrlMediaType('')
    setUrlContentType('')
  }

  const extractUrlInfo = async (givenUrl: string) => {
    clearContents()

    const apis = new APIS.Url()
    const { title, siteName, description, images, mediaType, contentType } = await apis.postUrlInfo(
      {
        url: givenUrl,
      },
    )

    setUrl(givenUrl)
    if (title) setUrlTitle(title)
    if (description) setUrlDescription(description)
    if (siteName) setUrlSiteName(siteName)
    if (images && images.length) setUrlImages(images[0])
    if (mediaType) setUrlMediaType(mediaType)
    if (contentType) setUrlContentType(contentType)

    setLoading(false)
  }

  const registerNewResource = async () => {
    const params = new PostResourceRequest()
    if (url) params.url = url
    if (urlTitle) params.title = urlTitle
    if (urlDescription) params.description = urlDescription
    if (urlSiteName) params.siteName = urlSiteName
    if (urlImages) params.image = urlImages
    if (urlMediaType) params.mediaType = urlMediaType
    if (urlContentType) params.contentType = urlContentType
    if (user && user.id) params.creatUser = user.id
    await new APIS.Resource().postInterest(params)
  }

  const handleOk = () => {
    registerNewResource()
    props.onOk()
  }

  return (
    <div>
      <Modal
        title="Add new resource"
        visible={props.visible}
        onOk={handleOk}
        onCancel={props.onCancel}
      >
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
                <Col span={5}>Site</Col>
                <Col span={19}>
                  <h3>{urlSiteName}</h3>
                </Col>
              </Row>
              <Row>
                <Col span={5}>Url</Col>
                <Col span={19}>
                  <h3>{url}</h3>
                </Col>
              </Row>
              <Row>
                <Col span={5}>Title</Col>
                <Col span={19}>
                  <TextArea value={urlTitle} onChange={e => setUrlTitle(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <Col span={5}>Description</Col>
                <Col span={19}>
                  <TextArea
                    value={urlDescription}
                    onChange={e => setUrlDescription(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={5}>Date</Col>
                <Col span={19}>
                  <Input
                    value={moment().format('YYYY-MM-DD HH:mm')}
                    onChange={e => setUrlDescription(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
          </React.Fragment>
        ) : null}
      </Modal>
    </div>
  )
}

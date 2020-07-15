import { APIS } from '@progress/api'
import { Card, Tag } from 'antd'
import Search from 'antd/lib/input/Search'
import moment from 'antd/node_modules/moment'
import React, { useContext, useState, useEffect } from 'react'
import { RootContext } from 'src/stores/RootContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Editor } from 'react-draft-wysiwyg'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Container from 'react-bootstrap/Container'

export interface IAddNewBookmarkProps {
  url: string
}

export function AddNewBookmark(props: IAddNewBookmarkProps) {
  const { user } = useContext(RootContext)
  const [loading, setLoading] = useState(false)
  const [isLoadingDone, setIsLoadingDone] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  // const [url, setUrl] = useState('')
  // const [urlTitle, setUrlTitle] = useState('')
  // const [urlDescription, setUrlDescription] = useState('')
  // const [urlSiteName, setUrlSiteName] = useState('')
  // const [urlImages, setUrlImages] = useState('')
  // const [urlScreenshot, setUrlScreenshot] = useState('')
  // const [urlMediaType, setUrlMediaType] = useState('')
  // const [urlContentType, setUrlContentType] = useState('')

  const [state, setState] = useState({
    url: '',
    title: '',
    description: '',
    siteName: '',
    siteOgImage: '',
    screenshot: '',
    thumbnail: '',
  })

  const [isOgImageSelected, setIsOgImageSelected] = useState(true)
  const [isScreenshotSelected, setIsScreenshotSelected] = useState(false)

  const clearContents = () => {
    // setUrlSiteName('')
    // setUrl('')
    // setUrlTitle('')
    // setUrlDescription('')
    // setUrlImages('')
    // setUrlScreenshot('')
    // setUrlMediaType('')
    // setUrlContentType('')

    setState((prvState) => ({
      ...prvState,
      url: '',
      title: '',
      description: '',
      siteName: '',
      siteOgImage: '',
      screenshot: '',
      thumbnail: '',
    }))
  }

  const extractUrlInfo = async (givenUrl: string) => {
    if (!givenUrl) return

    clearContents()

    setIsLoadingDone(false)
    setIsUploading(true)

    const apis = new APIS.Url()
    const { success, data, error } = await apis.postUrlInfo({
      userId: user!.id,
      url: givenUrl,
    })

    if (success && data) {
      const {
        title,
        siteName,
        description,
        images,
        siteOgImage,
        screenshot,
        mediaType,
        contentType,
      } = data

      // setUrl(givenUrl)
      // if (title) setUrlTitle(title)
      // if (description) setUrlDescription(description)
      // if (siteName) setUrlSiteName(siteName)
      // if (images && images.length) setUrlImages(images[0])
      // if (screenshot) setUrlScreenshot(screenshot)
      // if (mediaType) setUrlMediaType(mediaType)
      // if (contentType) setUrlContentType(contentType)

      setState((prvState) => ({
        ...prvState,
        url: props.url ?? '',
        title: title ?? '',
        description: description ?? '',
        siteName: siteName ?? '',
        siteOgImage: siteOgImage ?? '',
        screenshot: screenshot ?? '',
        thumbnail: isOgImageSelected && siteOgImage ? siteOgImage : screenshot || '',
        // thumbnail: isOgImageSelected ? siteOgImage : screenshot || '',
      }))

      setLoading(false)
      setIsUploading(false)
      // setIsLoading(false)
      setIsLoadingDone(true)
    }
  }

  const selectImage = (e: any) => {
    if (e.target.className.includes('ogImage')) {
      setIsScreenshotSelected(false)
      setIsOgImageSelected(true)
    } else if (e.target.className.includes('screenshot')) {
      setIsOgImageSelected(false)
      setIsScreenshotSelected(true)
    }
  }

  const handleRegister = () => {
    console.log('handleRegister -> handleRegister', handleRegister)
  }

  useEffect(() => {
    extractUrlInfo(props.url)
  }, [props.url])

  return (
    <Container>
      {isLoadingDone ? (
        <React.Fragment>
          <Form>
            <Form.Group controlId="formGroupSiteName">
              <Form.Label>Site</Form.Label>
              <Form.Control type="text" placeholder="" value={state.siteName} readOnly={true} />
            </Form.Group>
            <Form.Group controlId="formGroupUrl">
              <Form.Label>Url</Form.Label>
              <Form.Control type="text" placeholder="Url" value={state.url} readOnly={true} />
            </Form.Group>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Title"
                value={state.title}
                onChange={(e) =>
                  setState((prvState) => ({
                    ...prvState,
                    title: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
              <Form.Label>Title</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                value={state.description}
                onChange={(e) =>
                  setState((prvState) => ({
                    ...prvState,
                    description: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group controlId="formGroupImage">
              <Form.Label>Screenshot (Please select the representative image.)</Form.Label>
              <Row>
                <Col sm={6}>
                  <div
                    style={{ padding: '2px' }}
                    onClick={(e) => {
                      selectImage(e)
                    }}
                  >
                    <img
                      className={'ogImage ' + (isOgImageSelected ? 'activeImage' : '')}
                      style={{ width: '100%' }}
                      src={state.siteOgImage}
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div
                    style={{ padding: '2px' }}
                    onClick={(e) => {
                      selectImage(e)
                    }}
                  >
                    <img
                      className={'screenshot ' + (isScreenshotSelected ? 'activeImage' : '')}
                      style={{ width: '100%' }}
                      src={state.screenshot}
                    />
                  </div>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="formGroupMemo">
              <Form.Label>Memo</Form.Label>
              <div style={{ border: '1px solid' }}>
                <Editor />
              </div>
            </Form.Group>
            <Form.Group controlId="formGroupTag">
              <Form.Label>Interests (tags)</Form.Label>
              <div>
                <Tag color="blue">NLP</Tag>
                <Tag color="blue">예능</Tag>
              </div>
            </Form.Group>
            <Form.Group controlId="formGroupUrl">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url"
                value={moment().format('YYYY-MM-DD HH:mm')}
                readOnly={true}
              />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" block={true} onClick={() => handleRegister()}>
            Register
          </Button>
        </React.Fragment>
      ) : isUploading ? (
        <Card loading={isUploading} />
      ) : null}
    </Container>
  )
}

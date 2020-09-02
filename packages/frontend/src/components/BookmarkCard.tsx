import React from 'react'
import Card from 'react-bootstrap/Card'

export interface IBookmarkCardProps {
  url: string
  title: string
  siteName?: string
  image?: string
  screenshot?: string
  description?: string
}

export function BookmarkCard(props: IBookmarkCardProps) {
  return (
    <Card>
      <Card.Header>{`${props.siteName}`}</Card.Header>
      <a href={`${props.url}`}>
        <Card.Img style={{ height: '12rem' }} variant="top" src={`${props.image}`} />
        <Card.Body>
          <Card.Title>{`${props.title}`}</Card.Title>
          <Card.Text>{`${props.description}`}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  )
}

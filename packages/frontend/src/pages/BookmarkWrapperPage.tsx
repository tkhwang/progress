import * as React from 'react'
import { Divider } from 'antd'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BodyContainer from './BodyContainer'
import { AddNewBookmark } from 'src/components/AddNewBookmark'
import { useSelector } from 'react-redux'
import { AppState } from 'src/reducers/rootReducers'
import { BookmarkPage } from './BookmarkPage'

export interface IBookmarkWrapperPageProps {}

export function BookmarkWrapperPage(props: IBookmarkWrapperPageProps) {
  const { url } = useSelector((state: AppState) => state.url)

  return <BodyContainer>{url ? <AddNewBookmark url={url} /> : <BookmarkPage />}</BodyContainer>
}

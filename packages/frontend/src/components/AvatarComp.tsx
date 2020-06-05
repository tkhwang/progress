import { AUTH_KEY } from '@progress/api/models'
import { Avatar } from 'antd'
import React, { useEffect, useState } from 'react'

export interface IAvatarCompProps {}

export default function AvatarComp(props: IAvatarCompProps) {
  const [imgUrl, setImgUrl] = useState('')
  const [userName, setUserName] = useState('user')
  useEffect(() => {
    const userData = localStorage.getItem(AUTH_KEY.USER)

    if (userData) {
      const { name, image_url } = JSON.parse(userData)
      if (image_url) setImgUrl(image_url)
      if (name) setUserName(name)
    }
  }, [])
  return (
    <React.Fragment>
      {imgUrl ? <Avatar src={`${imgUrl}`} /> : <Avatar>{`${userName}`}</Avatar>}
    </React.Fragment>
  )
}

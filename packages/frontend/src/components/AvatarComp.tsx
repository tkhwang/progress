import { UserOutlined } from '@ant-design/icons'
import { AUTH_KEY } from '@progress/api'
import { Avatar } from 'antd'
import React, { useEffect, useState } from 'react'

export interface IAvatarCompProps {}

export default function AvatarComp(props: IAvatarCompProps) {
	const [imgUrl, setImgUrl] = useState('')
	useEffect(() => {
		const userData = localStorage.getItem(AUTH_KEY.USER)

		if (userData) {
			const { image_url } = JSON.parse(userData)
			if (image_url) setImgUrl(image_url)
		}
	}, [])
	return <React.Fragment>{imgUrl ? <Avatar src={`${imgUrl}`} /> : <Avatar icon={<UserOutlined />} />}</React.Fragment>
}

import { BorderOuterOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import * as React from 'react'
import { useEffect } from 'react'
import config from 'src/config'

export interface IMeProps {
	forceUpdate: Function
}

export function Lip(props: IMeProps) {
	useEffect(() => {
		props.forceUpdate(new Date().getTime().toString())
	}, [])
	const { PROGRESS_URL } = config()

	return (
		<div>
			<h1>
				<BorderOuterOutlined /> Interest Fields
			</h1>
			<Row>
				<Col span={12}>
					<img src={`${PROGRESS_URL}/image/073.svg`} />
				</Col>
				<Col span={12}>
					<h1>Me Page</h1>
				</Col>
			</Row>
		</div>
	)
}

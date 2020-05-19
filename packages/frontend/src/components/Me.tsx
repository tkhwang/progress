import { Col, Row } from 'antd'
import * as React from 'react'
import { useEffect } from 'react'
import config from 'src/config'

export interface IMeProps {
	forceUpdate: Function
}

export function Me(props: IMeProps) {
	useEffect(() => {
		props.forceUpdate(new Date().getTime().toString())
	}, [])
	const { PROGRESS_URL } = config()

	return (
		<div>
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

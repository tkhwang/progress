import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import * as React from 'react'

export interface IInterestProps {
	title: string
	width: string
	description?: string
	image?: string
}

export function InterestCard(props: IInterestProps) {
	return (
		<div>
			<Card
				hoverable
				style={{ width: `${props.width}` }}
				cover={<img alt={`${props.title}`} src={`${props.image}`} />}
			>
				<Meta title={`${props.title}`} description={`${props.description}`} />
			</Card>
		</div>
	)
}

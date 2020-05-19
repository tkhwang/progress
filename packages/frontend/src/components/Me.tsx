import * as React from 'react'
import { useEffect } from 'react'

export interface IMeProps {
	forceUpdate: Function
}

export function Me(props: IMeProps) {
	useEffect(() => {
		props.forceUpdate(new Date().getTime().toString())
	}, [])

	return (
		<div>
			<h1>Me Page</h1>
		</div>
	)
}

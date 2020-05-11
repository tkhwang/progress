import React from 'react'
import { Anchor, Box, Grommet, Header } from 'grommet'
import { grommet } from 'grommet/themes'

export const Avatar = ({ ...rest }) => (
	<Box
		height="xxsmall"
		width="xxsmall"
		round="full"
		background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
		{...rest}
	/>
)

export interface IGrommetHeaderProps {}

export function GrommetHeader(props: IGrommetHeaderProps) {
	return (
		<div>
			<Grommet theme={grommet}>
				<Header background="light-4" pad="small">
					<Anchor label="Home" href="#" />
					<Box direction="row" gap="medium">
						<Anchor label="Profile" href="#" />
						<Avatar />
					</Box>
				</Header>
			</Grommet>
		</div>
	)
}

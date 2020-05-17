import * as React from 'react'

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
	return (
		<React.Fragment>
			<ul>
				<li>
					Inspired by{' '}
					<a href='https://www.swyx.io/writing/learn-in-public/'>Learn In Public: The fastest way to learn</a>
				</li>
				<li>
					(Korean translation :{' '}
					<a href='https://tkhwang.me/2020-04-22-learn-in-public-korean-translation'>
						(번역) 공개적으로 학습하라
					</a>
					)
				</li>
			</ul>

			<img
				style={{ width: '70%' }}
				src='https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2020/04/photo-1523240795612-9a054b0db644.jpeg'
				alt='new'
			/>
		</React.Fragment>
	)
}

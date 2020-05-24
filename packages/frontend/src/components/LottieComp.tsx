import React from 'react'
import Lottie from 'react-lottie'

export interface ILottieCompProps {
  animationData: any
}

export function LottieComp(props: ILottieCompProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

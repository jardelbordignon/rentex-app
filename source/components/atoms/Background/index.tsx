import type { ReactNode } from 'react'
import { ImageBackground, type ImageBackgroundProps } from 'react-native'

import bgImg from 's/assets/images/rocket.jpg'

import s from './styles'

type Props = Omit<ImageBackgroundProps, 'source'> & {
  children: ReactNode
}

export function Background({ children, ...rest }: Props) {
  return (
    <ImageBackground source={bgImg} defaultSource={bgImg} style={s.box} {...rest}>
      {children}
    </ImageBackground>
  )
}

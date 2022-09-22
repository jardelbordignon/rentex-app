import { useState } from 'react'
import { Image, type ImageProps } from 'react-native'

import s from './styles'

type Props = ImageProps & {
  rounded?: boolean
}

export function Img({ rounded, ...rest }: Props) {
  const [valid, setValid] = useState(true)

  if (valid) {
    return (
      <Image
        {...rest}
        onError={() => setValid(false)}
        style={[s.image, rounded ? s.rounded : '']}
      />
    )
  }

  // return (
  //   <S.PlaceholderWrapper size={size} rounded={rounded}>
  //     <S.Placeholder>Nenhuma foto{'\n'}carregada</S.Placeholder>
  //   </S.PlaceholderWrapper>
  // )
}

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Txt } from 's/components/atoms'

import s from './styles'

type Props = RectButtonProps & {
  title: string
}

export function ConfirmButton({ title, ...rest }: Props) {
  return (
    <RectButton style={s.box} {...rest}>
      <Txt family="primary_500" color="shape" size="sm">
        {title}
      </Txt>
    </RectButton>
  )
}

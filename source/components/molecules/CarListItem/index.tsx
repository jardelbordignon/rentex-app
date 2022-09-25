import { View } from 'react-native'

import GasolineSvg from 's/assets/gasoline.svg'
import { LazyImage, Txt } from 's/components/atoms'
import { CarType } from 's/types/car'

import s from './styles'

type Props = {
  data: CarType
}

export function CarListItem({ data }: Props) {
  const { brand, name, rent, images } = data
  return (
    <View style={s.box}>
      <View style={s.details}>
        <Txt family="secondary_500" size="xs" color="text_detail">
          {brand}
        </Txt>
        <Txt>{name}</Txt>

        <View style={s.about}>
          <View style={s.rent}>
            <Txt family="secondary_500" size="xs" color="main" transform="uppercase">
              {rent.period}
            </Txt>
            <Txt size="xs">R$ {rent.price}</Txt>
          </View>

          <View style={s.type}>
            <GasolineSvg />
          </View>
        </View>
      </View>

      <LazyImage
        source={{ uri: images[0].url }}
        thumbSource={{ uri: images[0].thumbUrl }}
        width={167}
        height={85}
      />
    </View>
  )
}

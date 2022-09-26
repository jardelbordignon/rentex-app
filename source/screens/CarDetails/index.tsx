import { ScrollView, View } from 'react-native'

import { Txt } from 's/components/atoms'
import { BackButton, ImageSlider } from 's/components/molecules'

import s from './styles'

const images = [
  {
    url: 'https://www.freepngimg.com/thumb/fiat/135999-fiat-doblo-png-download-free.png',
  },
]

export function CarDetails() {
  return (
    <View style={s.box}>
      <View style={s.header}>
        <BackButton
          onPress={() => {
            console.log('Press')
          }}
        />
      </View>

      <View style={s.sliderBox}>
        <ImageSlider images={images} />
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <View style={s.details}>
          <View style={s.description}>
            <Txt
              family="secondary_500"
              color="text_detail"
              size="xs"
              transform="uppercase">
              Fiat
            </Txt>

            <Txt family="secondary_500" color="title" size="lg" transform="uppercase">
              Doblô
            </Txt>
          </View>

          <View style={s.rent}>
            <Txt
              family="secondary_500"
              color="text_detail"
              size="xs"
              transform="uppercase">
              Ao dia
            </Txt>
            <Txt family="secondary_500" color="main" size="lg">
              R$ 200
            </Txt>
          </View>
        </View>

        <Txt family="primary_400" size="sm" align="justify" style={s.about}>
          Descrição fiat doblo fiat doblo fiat d oblo fiat dobl o fiat doblo fiat doblo
          fiat doblo fiat dob lo fiat doblo fiat doblo fiat d oblo fiat doblo fiat doblo
          fiat dob lo fiat doblo fiat dob lo fiat doblo
        </Txt>
      </ScrollView>
    </View>
  )
}

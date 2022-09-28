import { ScrollView, View } from 'react-native'

import accelerationSvg from 's/assets/acceleration.svg'
import exchangeSvg from 's/assets/exchange.svg'
import forceSvg from 's/assets/force.svg'
import gasolineSvg from 's/assets/gasoline.svg'
import peopleSvg from 's/assets/people.svg'
import speedSvg from 's/assets/speed.svg'
import { Txt } from 's/components/atoms'
import { BackButton, Button, ImageSlider } from 's/components/molecules'
import { Accessory } from 's/components/molecules/Accessory'
import { CarDetailsNavProps } from 's/types/navigation'

import s from './styles'

export function CarDetails({ navigation, route }: CarDetailsNavProps) {
  const { brand, images, name, rent } = route.params

  return (
    <View style={s.box}>
      <View style={s.header}>
        <BackButton onPress={navigation.goBack} />
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
              {brand}
            </Txt>

            <Txt family="secondary_500" color="title" size="lg" transform="uppercase">
              {name}
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
              R$ {rent.price}
            </Txt>
          </View>
        </View>

        <View style={s.accessories}>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </View>

        <Txt family="primary_400" size="sm" align="justify" style={s.about}>
          Descrição fiat doblo fiat doblo fiat d oblo fiat dobl o fiat doblo fiat doblo
          fiat doblo fiat dob lo fiat doblo fiat doblo fiat d oblo fiat doblo fiat doblo
          fiat dob lo fiat doblo fiat dob lo fiat doblo
        </Txt>
      </ScrollView>

      <View style={s.footer}>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling')}
        />
      </View>
    </View>
  )
}

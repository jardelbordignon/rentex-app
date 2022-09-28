import { ScrollView, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import accelerationSvg from 's/assets/acceleration.svg'
import exchangeSvg from 's/assets/exchange.svg'
import forceSvg from 's/assets/force.svg'
import gasolineSvg from 's/assets/gasoline.svg'
import peopleSvg from 's/assets/people.svg'
import speedSvg from 's/assets/speed.svg'
import { Txt } from 's/components/atoms'
import { BackButton, Button, ImageSlider } from 's/components/molecules'
import { Accessory } from 's/components/molecules/Accessory'
import { theme } from 's/theme'
import { NavProps } from 's/types/navigation'

import s from './styles'

const images = [
  {
    url: 'https://www.freepngimg.com/thumb/fiat/135999-fiat-doblo-png-download-free.png',
  },
]

export function SchedulingDetails({ navigation }: NavProps) {
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

        <View style={s.accessories}>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </View>

        <View style={s.rentalPeriod}>
          <View style={s.calendarIcon}>
            <Icon
              name="calendar-check-outline"
              size={theme.fontSize.xl}
              color={theme.colors.shape}
            />
          </View>

          <View style={s.dateInfo}>
            <Txt color="text_detail" size="xs">
              DE
            </Txt>
            <Txt size="sm">18/06/2021</Txt>
          </View>

          <Icon
            name="chevron-right"
            size={theme.fontSize.lg}
            color={theme.colors.shape}
          />

          <View style={s.dateInfo}>
            <Txt color="text_detail" size="xs">
              ATÉ
            </Txt>
            <Txt size="sm">18/06/2021</Txt>
          </View>
        </View>

        <View style={s.rentalPrice}>
          <Txt family="primary_500" size="xs" color="text_detail">
            Total
          </Txt>
          <View style={s.rentalPriceDetails}>
            <Txt family="primary_500" size="sm">
              R$ 200 x3 diárias
            </Txt>
            <Txt family="primary_500" size="lg" color="success">
              R$ 600,00
            </Txt>
          </View>
        </View>
      </ScrollView>

      <View style={s.footer}>
        <Button
          title="Alugar agora"
          color="success"
          onPress={() => navigation.navigate('SchedulingComplete')}
        />
      </View>
    </View>
  )
}

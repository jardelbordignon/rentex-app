import { ScrollView, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { scheduleApi } from 's/api/schedule'
import { Txt } from 's/components/atoms'
import { BackButton, Button, Slider } from 's/components/molecules'
import { Accessory } from 's/components/molecules/Accessory'
import { theme } from 's/theme'
import { SchedulingDetailsNavProps } from 's/types/navigation'
import { accessoryIcon } from 's/utils/accessoryIcon'
import { formatDate, formatPrice } from 's/utils/formatters'

import s from './styles'

export function SchedulingDetails({ navigation, route }: SchedulingDetailsNavProps) {
  const { car, dates } = route.params

  const handleConfirmRental = async () => {
    await scheduleApi.add(car, dates)

    navigation.navigate('SchedulingComplete')
  }

  return (
    <View style={s.box}>
      <View style={s.header}>
        <BackButton onPress={navigation.goBack} />
      </View>

      <View style={s.sliderBox}>
        <Slider images={car.photos.map(photo => ({ url: photo }))} />
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <View style={s.details}>
          <View style={s.description}>
            <Txt
              family="secondary_500"
              color="text_detail"
              size="xs"
              transform="uppercase">
              {car.brand}
            </Txt>

            <Txt family="secondary_500" color="title" size="lg" transform="uppercase">
              {car.name}
            </Txt>
          </View>

          <View style={s.rent}>
            <Txt
              family="secondary_500"
              color="text_detail"
              size="xs"
              transform="uppercase">
              {car.rent.period}
            </Txt>
            <Txt family="secondary_500" color="main" size="lg">
              R$ {car.rent.price}
            </Txt>
          </View>
        </View>

        <View style={s.accessories}>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={accessoryIcon(accessory.type)}
            />
          ))}
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
            <Txt size="sm">{formatDate(dates[0])}</Txt>
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
            <Txt size="sm">{formatDate(dates[dates.length - 1])}</Txt>
          </View>
        </View>

        <View style={s.rentalPrice}>
          <Txt family="primary_500" size="xs" color="text_detail">
            Total
          </Txt>
          <View style={s.rentalPriceDetails}>
            <Txt family="primary_500" size="sm">
              R$ {car.rent.price} x{dates.length} diárias
            </Txt>
            <Txt family="primary_500" size="lg" color="success">
              {formatPrice(car.rent.price * dates.length)}
            </Txt>
          </View>
        </View>
      </ScrollView>

      <View style={s.footer}>
        <Button title="Alugar agora" color="success" onPress={handleConfirmRental} />
      </View>
    </View>
  )
}

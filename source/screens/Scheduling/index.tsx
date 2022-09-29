import { useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import type { DateData } from 'react-native-calendars'

import ArrowSvg from 's/assets/arrow.svg'
import { Txt } from 's/components/atoms'
import { BackButton, Button, Calendar, MarkedDateProps } from 's/components/molecules'
import { generateInterval } from 's/components/molecules/Calendar/generateInterval'
import { SchedulingNavProps } from 's/types/navigation'
import { formatDate } from 's/utils/formatters'

import s from './styles'

export function Scheduling({ navigation, route }: SchedulingNavProps) {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData>()
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({})

  const datesOfMarkedDates = Object.keys(markedDates)

  const handleChangeDate = (date: DateData) => {
    let start = !lastSelectedDate?.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)
  }

  return (
    <View style={s.box}>
      <View style={s.header}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <BackButton onPress={navigation.goBack} color="shape" />

        <Txt family="secondary_600" size="xl" color="shape" style={s.title}>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Txt>

        <View style={s.rentalPeriod}>
          <View>
            <Txt family="secondary_500" size="xs">
              DE
            </Txt>
            <Txt size="sm" color="shape">
              {formatDate(datesOfMarkedDates[0])}
            </Txt>
          </View>

          <ArrowSvg />

          <View>
            <Txt family="secondary_500" size="xs">
              ATÉ
            </Txt>
            <Txt size="sm" color="shape">
              {formatDate(datesOfMarkedDates[datesOfMarkedDates.length - 1])}
            </Txt>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </ScrollView>

      {datesOfMarkedDates[0] && (
        <View style={s.footer}>
          <Button
            title="Confirmar"
            onPress={() =>
              navigation.navigate('SchedulingDetails', {
                car: route.params.car,
                dates: datesOfMarkedDates,
              })
            }
          />
        </View>
      )}
    </View>
  )
}

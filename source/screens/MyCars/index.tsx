import { useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { scheduleApi } from 's/api/schedule'
import { Txt } from 's/components/atoms'
import { BackButton, CarListItem } from 's/components/molecules'
import { NavProps } from 's/types/navigation'
import { ScheduleByUser } from 's/types/schedule'

import s from './styles'

export function MyCars({ navigation }: NavProps) {
  const [schedules, setSchedules] = useState<ScheduleByUser[]>([])
  const [loading, setLoading] = useState(true)

  const loadCars = async () => {
    try {
      setSchedules(await scheduleApi.findByUser('1'))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCars()
  }, [])

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

        <Txt family="secondary_400" size="sm" color="shape" style={s.title}>
          Conforto, segurançae e praticidade.
        </Txt>
      </View>

      <View style={s.content}>
        <View style={s.appointment}>
          <Txt size="sm">Agendamentos feitos</Txt>
          <Txt size="sm" family="primary_500" color="title">
            05
          </Txt>
        </View>
      </View>

      <FlatList
        data={schedules}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CarListItem data={item.car} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.contentList}
      />
    </View>
  )
}

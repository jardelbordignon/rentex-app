import { LocaleConfig, Calendar as _Calendar } from 'react-native-calendars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { theme } from 's/theme'
import { dateNames } from 's/utils/dateNames'

import s from './styles'

LocaleConfig.locales['pt-br'] = dateNames
LocaleConfig.defaultLocale = 'pt-br'

export function Calendar() {
  return (
    <_Calendar
      renderArrow={direction => (
        <Icon
          name={`chevron-${direction === 'left' ? 'left' : 'right'}`}
          style={s.icon}
        />
      )}
      headerStyle={s.header}
      theme={{
        textMonthFontFamily: theme.fontFamily.secondary_600,
        textMonthFontSize: theme.fontSize.md,
        monthTextColor: theme.colors.title,
        textDayFontFamily: theme.fontFamily.primary_400,
        textDayHeaderFontFamily: theme.fontFamily.primary_500,
        textDayHeaderFontSize: theme.fontSize.xs,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date().toString()}
    />
  )
}

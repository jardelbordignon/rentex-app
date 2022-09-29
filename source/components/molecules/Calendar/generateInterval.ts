import type { DateData } from 'react-native-calendars'

import { theme } from 's/theme'
import { formatDate } from 's/utils/formatters'

import type { MarkedDateProps } from '.'

const oneDay = 86400000 // 1000 * 60 * 60 * 24 - one day

export function generateInterval(start: DateData, end: DateData) {
  const diffMS = Number(end.timestamp) - Number(start.timestamp)
  const diffDays = diffMS / oneDay

  const arrayOfDays = Array.from({ length: diffDays + 1 }, (_, i) => i)

  let interval: MarkedDateProps = {}

  arrayOfDays.forEach((_, i) => {
    const date = formatDate(new Date(start.timestamp + i * oneDay), { lang: 'en-CA' })

    const isStartOrEndDate =
      formatDate(start.dateString, { lang: 'en-CA' }) === date ||
      formatDate(end.dateString, { lang: 'en-CA' }) === date

    interval = {
      ...interval,
      [date]: {
        color: theme.colors[isStartOrEndDate ? 'main' : 'main_light'],
        textColor: theme.colors[isStartOrEndDate ? 'main_light' : 'main'],
      },
    }
  })

  return interval
}

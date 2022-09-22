import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: theme.colors.background_primary,
  },
  header: {
    width: '100%',
    height: RFValue(113),
    backgroundColor: theme.colors.header,
    justifyContent: 'flex-end',
    paddingVertical: RFValue(32),
    paddingHorizontal: RFValue(24),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalCars: {
    fontSize: RFValue(theme.fontSize.sm),
    fontFamily: theme.fontFamily.primary_400,
    color: theme.colors.text,
  },
})

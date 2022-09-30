import { StyleSheet } from 'react-native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: theme.colors.background_secondary,
  },

  header: {
    width: '100%',
    height: RFValue(300),
    backgroundColor: theme.colors.header,
    justifyContent: 'center',
    padding: theme.spacing[3],
    paddingTop: getStatusBarHeight() + theme.spacing[3],
  },

  title: {
    marginTop: 24,
  },

  rentalPeriod: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: theme.spacing[3],
  },

  content: {
    paddingBottom: theme.spacing[2],
  },

  footer: {
    width: '100%',
    padding: theme.spacing[3],
    paddingBottom: getBottomSpace() + theme.spacing[3],
  },
})

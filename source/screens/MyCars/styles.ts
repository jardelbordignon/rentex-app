import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: theme.colors.background_primary,
  },

  header: {
    width: '100%',
    height: RFValue(300),
    backgroundColor: theme.colors.header,
    justifyContent: 'center',
    padding: theme.spacing[4],
    paddingTop: getStatusBarHeight() + theme.spacing[4],
  },

  title: {
    marginTop: 24,
  },

  content: {
    flex: 1,
    paddingHorizontal: theme.spacing[2],
  },

  appointment: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing[3],
  },

  contentList: {
    padding: theme.spacing[2],
  },
})

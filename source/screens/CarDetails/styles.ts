import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: theme.colors.background_secondary,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    marginTop: getStatusBarHeight() + theme.spacing[3],
    marginLeft: theme.spacing[5],
  },

  sliderBox: {
    marginTop: getStatusBarHeight() + theme.spacing[4],
  },
})
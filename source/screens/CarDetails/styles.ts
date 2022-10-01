import { StyleSheet } from 'react-native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'

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
    marginTop: getStatusBarHeight() + theme.spacing[2],
    marginLeft: theme.spacing[3],
  },

  sliderBox: {
    marginTop: getStatusBarHeight() + theme.spacing[3],
  },

  content: {
    padding: theme.spacing[3],
    alignItems: 'center',
  },

  details: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing[4],
  },

  description: {},

  rent: {},

  accessories: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing[2],
  },

  about: {
    lineHeight: 23,
    marginTop: theme.spacing[3],
  },

  footer: {
    width: '100%',
    padding: theme.spacing[3],
    paddingBottom: getBottomSpace() + theme.spacing[2],
  },
})

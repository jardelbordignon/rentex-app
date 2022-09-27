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
    marginTop: getStatusBarHeight() + theme.spacing[3],
    marginLeft: theme.spacing[5],
  },

  sliderBox: {
    marginTop: getStatusBarHeight() + theme.spacing[4],
  },

  content: {
    padding: theme.spacing[4],
    alignItems: 'center',
  },

  details: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing[5],
  },

  description: {},

  rent: {},

  accessories: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing[3],
  },

  rentalPeriod: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing[6],
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.line,
    paddingBottom: theme.spacing[3],
  },

  calendarIcon: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateInfo: {},

  rentalPrice: {
    width: '100%',
    marginBottom: theme.spacing[3],
  },

  rentalPriceDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footer: {
    width: '100%',
    padding: theme.spacing[4],
    paddingBottom: getBottomSpace() + theme.spacing[4],
  },
})

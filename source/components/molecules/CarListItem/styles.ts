import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    width: '100%',
    height: RFValue(126),
    backgroundColor: theme.colors.background_secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(theme.spacing[3]),
    marginBottom: RFValue(theme.spacing[3]),
  },

  details: {},

  about: {
    flexDirection: 'row',
    width: '100%',
    marginTop: RFValue(16),
  },

  rent: {
    marginRight: 24,
  },

  type: {},
})

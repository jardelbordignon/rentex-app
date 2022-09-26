import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    width: RFValue(95),
    height: RFValue(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background_primary,
    padding: theme.spacing[2],
    marginBottom: theme.spacing[2],
  },
})

import { StyleSheet } from 'react-native'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    width: theme.spacing[9],
    height: 56,
    backgroundColor: theme.colors.shape_dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

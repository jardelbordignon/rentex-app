import { StyleSheet } from 'react-native'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.header,
  },

  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.main,
  },
})

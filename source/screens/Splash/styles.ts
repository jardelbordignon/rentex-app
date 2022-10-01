import { StyleSheet } from 'react-native'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.header,
  },

  txt: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
})

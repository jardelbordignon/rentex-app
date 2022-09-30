import { StyleSheet } from 'react-native'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: theme.colors.header,
    paddingTop: 96,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing[3],
  },

  title: {
    marginTop: theme.spacing[5],
  },

  message: {
    marginTop: theme.spacing[2],
    lineHeight: theme.spacing[3],
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: theme.spacing[8],
  },
})

import { StyleSheet } from 'react-native'

import { theme } from 's/theme'

export default StyleSheet.create({
  icon: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
  },

  header: {
    backgroundColor: theme.colors.background_secondary,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.text_detail,
    paddingBottom: theme.spacing[2],
    marginBottom: theme.spacing[2],
  },
})

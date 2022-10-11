import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from 's/theme'

export default StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: theme.colors.background_primary,
  },

  header: {
    width: '100%',
    height: RFValue(113),
    backgroundColor: theme.colors.header,
    justifyContent: 'flex-end',
    paddingVertical: theme.spacing[5],
    paddingHorizontal: theme.spacing[4],
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentList: {
    padding: theme.spacing[2],
  },
})

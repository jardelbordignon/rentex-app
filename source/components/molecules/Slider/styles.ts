import { Dimensions, StyleSheet } from 'react-native'

import { theme } from 's/theme'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  box: {
    width: '100%',
  },

  indexes: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: theme.spacing[3],
  },

  index: {
    width: 6,
    height: 6,
    marginLeft: theme.spacing[1],
    borderRadius: 3,
  },

  image: {
    width,
    height: 132,
  },
})

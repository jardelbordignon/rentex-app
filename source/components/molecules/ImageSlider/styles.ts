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
    paddingRight: theme.spacing[2],
  },

  index: {
    width: 6,
    height: 6,
    marginLeft: theme.spacing[2],
    borderRadius: 3,
  },

  images: {
    width,
    height: 132,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 280,
    height: 132,
  },
})

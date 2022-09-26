import { View } from 'react-native'

import { BackButton, ImageSlider } from 's/components/molecules'

import s from './styles'

const images = [
  {
    url: 'https://www.freepngimg.com/thumb/toyota/4-toyota-png-image-car-image.png',
    thumbUrl: 'https://www.freepngimg.com/thumb/toyota/4-toyota-png-image-car-image.png',
  },
]

export function CarDetails() {
  return (
    <View style={s.box}>
      <View style={s.header}>
        <BackButton
          onPress={() => {
            console.log('Press')
          }}
        />
      </View>

      <View style={s.sliderBox}>
        <ImageSlider images={images} />
      </View>
    </View>
  )
}

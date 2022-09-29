import { useRef } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { LazyImage } from 's/components/atoms'
import { theme } from 's/theme'

import s from './styles'

type ImageSlideItem = {
  url: string
  thumbUrl?: string
}

type Props = {
  images: ImageSlideItem[]
  delay?: number
}

export function ImageSlider({ images, delay = 4 }: Props) {
  const flatListRef = useRef<FlatList<ImageSlideItem>>(null)

  let index = 0,
    timer: any

  const changeSlideItem = (indexId?: number) => {
    if (indexId) index = indexId
    else index++

    if (index >= images.length) index = 0
    flatListRef.current?.scrollToIndex({ index, animated: true })
  }

  const startSlide = () => {
    timer = setInterval(changeSlideItem, delay * 1000)
  }

  const stopSlide = () => {
    clearInterval(timer)
    setTimeout(startSlide, delay * 2000)
  }

  return (
    <View style={s.box}>
      <View style={s.indexes}>
        {images.map((_, i) => {
          const backgroundColor = theme.colors[index === i ? 'title' : 'shape']
          return <View key={i} style={[s.index, { backgroundColor }]} />
        })}
      </View>

      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <LazyImage
            source={{ uri: item.url }}
            thumbSource={{ uri: item.thumbUrl }}
            style={s.image}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onLayout={startSlide}
        onTouchStart={stopSlide}
      />
    </View>
  )
}

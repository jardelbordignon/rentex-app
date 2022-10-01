import { useRef, useState } from 'react'
import { View, ViewToken } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { LazyImage } from 's/components/atoms'
import { theme } from 's/theme'

import s from './styles'

type ChangeImageProps = {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

type ImageSlideItem = {
  url: string
  thumbUrl?: string
}

type Props = {
  images: ImageSlideItem[]
  delay?: number
}

export function Slider({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  const viewableItemsRef = useRef((info: ChangeImageProps) => {
    console.log(info)
    const index = info.viewableItems[0].index!
    setImageIndex(index)
  })

  return (
    <View style={s.box}>
      <View style={s.indexes}>
        {images.map((_, i) => {
          const backgroundColor = theme.colors[imageIndex === i ? 'title' : 'shape']
          return <View key={i} style={[s.index, { backgroundColor }]} />
        })}
      </View>

      <FlatList
        data={images}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <LazyImage
            source={{ uri: item.url }}
            thumbSource={{ uri: item.thumbUrl }}
            style={s.image}
          />
        )}
        onViewableItemsChanged={viewableItemsRef.current}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

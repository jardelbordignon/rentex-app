import { View } from 'react-native'

import { LazyImage } from 's/components/atoms'
import { theme } from 's/theme'

import s from './styles'

type ImageSlideItem = {
  url: string
  thumbUrl?: string
}

type Props = {
  images: ImageSlideItem[]
}

export function ImageSlider({ images }: Props) {
  const active = true
  return (
    <View style={s.box}>
      <View style={s.indexes}>
        <View
          style={[s.index, { backgroundColor: theme.colors[active ? 'title' : 'shape'] }]}
        />
        <View
          style={[s.index, { backgroundColor: theme.colors[active ? 'title' : 'shape'] }]}
        />
        <View
          style={[s.index, { backgroundColor: theme.colors[active ? 'title' : 'shape'] }]}
        />
      </View>

      <View style={s.images}>
        {images.map((img, i) => (
          <LazyImage key={i} source={{ uri: img.url }} style={s.image} />
        ))}
      </View>
    </View>
  )
}

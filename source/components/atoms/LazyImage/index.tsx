// https://www.youtube.com/watch?v=2nXsLpUCO20&t=3064s
import { Animated, ImageBackground, type ImageProps } from 'react-native'

type Props = ImageProps & {
  source: ImageProps['source']
  thumbSource?: ImageProps['source']
  resizeMode?: ImageProps['resizeMode']
  aspectRatio?: number
  width?: number
  height?: number
}

export function LazyImage({
  source,
  thumbSource,
  aspectRatio = 2,
  resizeMode = 'contain',
  width = 150,
  height = 150,
  ...rest
}: Props) {
  const opacity = new Animated.Value(0)

  const handleAnimate = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  const animatedImage = (
    <Animated.Image
      source={source}
      style={Object.assign({ aspectRatio, opacity, width, height }, rest.style)}
      resizeMode={resizeMode}
      onLoadEnd={handleAnimate}
      {...rest}
    />
  )

  if (thumbSource) {
    return (
      <ImageBackground
        style={Object.assign({ aspectRatio, width, height }, rest.style)}
        source={thumbSource}
        resizeMode={resizeMode}
        {...rest}>
        {animatedImage}
      </ImageBackground>
    )
  }

  return animatedImage
}

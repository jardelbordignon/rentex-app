import { StatusBar, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

import { Txt } from 's/components/atoms'
import { BackButton, Button, Slider } from 's/components/molecules'
import { Accessory } from 's/components/molecules/Accessory'
import { CarDetailsNavProps } from 's/types/navigation'
import { accessoryIcon } from 's/utils/accessoryIcon'

import s from './styles'

export function CarDetails({ navigation, route }: CarDetailsNavProps) {
  const { about, accessories, brand, photos, name, rent } = route.params.car

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y
    console.log(e.contentOffset.y)
  })

  const headerStyleAnimation = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value, //
      [0, 200], // scroll de 0 a 200
      [200, 70], // quanto scroll 0 header 200px, quando scroll 200 ou + header 70px
      Extrapolate.CLAMP //
    ),
  }))

  const sliderStyleAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value, //
      [0, 150], // scroll de 0 a 150
      [1, 0], // quanto scroll 0 opacidade 100%, quando scroll 150 ou + opacidade 0
      Extrapolate.CLAMP //
    ),
  }))

  return (
    <View style={s.box}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <Animated.View style={headerStyleAnimation}>
        <View style={s.header}>
          <BackButton onPress={navigation.goBack} />
        </View>

        <Animated.View style={[s.sliderBox, sliderStyleAnimation]}>
          <Slider images={photos.map(photo => ({ url: photo }))} />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16} // 1000:60 = 16,666 então val 16 em torno de 60 frames por seg
      >
        <View style={s.details}>
          <View style={s.description}>
            <Txt
              family="secondary_500"
              color="text_detail"
              size="xs"
              transform="uppercase">
              {brand}
            </Txt>

            <Txt family="secondary_500" color="title" size="lg" transform="uppercase">
              {name}
            </Txt>
          </View>

          <View style={s.rent}>
            <Txt
              family="secondary_500"
              color="text_detail"
              size="xs"
              transform="uppercase">
              Ao dia
            </Txt>
            <Txt family="secondary_500" color="main" size="lg">
              R$ {rent.price}
            </Txt>
          </View>
        </View>

        <View style={s.accessories}>
          {accessories.map(accessory => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={accessoryIcon(accessory.type)}
            />
          ))}
        </View>

        <Txt family="primary_400" size="sm" align="justify" style={s.about}>
          {about}
          {about}
          {about}
          {about}
        </Txt>
      </Animated.ScrollView>

      <View style={s.footer}>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling', { car: route.params.car })}
        />
      </View>
    </View>
  )
}

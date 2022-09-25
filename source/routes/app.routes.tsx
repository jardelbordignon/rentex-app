import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CarDetails } from 's/screens/CarDetails'
import { Home } from 's/screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="carDetails">
    <Screen name="home" component={Home} />
    <Screen name="carDetails" component={CarDetails} />
  </Navigator>
)

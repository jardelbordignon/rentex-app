import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from 's/screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="home" component={Home} />
  </Navigator>
)

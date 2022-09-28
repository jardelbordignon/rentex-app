import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CarDetails } from 's/screens/CarDetails'
import { Home } from 's/screens/Home'
import { Scheduling } from 's/screens/Scheduling'
import { SchedulingComplete } from 's/screens/SchedulingComplete'
import { SchedulingDetails } from 's/screens/SchedulingDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
    <Screen name="Home" component={Home} />
    <Screen name="CarDetails" component={CarDetails} />
    <Screen name="Scheduling" component={Scheduling} />
    <Screen name="SchedulingComplete" component={SchedulingComplete} />
    <Screen name="SchedulingDetails" component={SchedulingDetails} />
  </Navigator>
)

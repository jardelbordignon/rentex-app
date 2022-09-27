import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CarDetails } from 's/screens/CarDetails'
import { Home } from 's/screens/Home'
import { Scheduling } from 's/screens/Scheduling'
import { SchedulingComplete } from 's/screens/SchedulingComplete'
import { SchedulingDetails } from 's/screens/SchedulingDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="schedulingComplete">
    <Screen name="home" component={Home} />
    <Screen name="carDetails" component={CarDetails} />
    <Screen name="scheduling" component={Scheduling} />
    <Screen name="schedulingComplete" component={SchedulingComplete} />
    <Screen name="schedulingDetails" component={SchedulingDetails} />
  </Navigator>
)

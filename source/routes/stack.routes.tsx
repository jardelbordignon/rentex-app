import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CarDetails } from 's/screens/CarDetails'
import { Home } from 's/screens/Home'
import { MyCars } from 's/screens/MyCars'
import { Scheduling } from 's/screens/Scheduling'
import { SchedulingComplete } from 's/screens/SchedulingComplete'
import { SchedulingDetails } from 's/screens/SchedulingDetails'
import { Splash } from 's/screens/Splash'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
    <Screen name="CarDetails" component={CarDetails} />
    <Screen name="Home" component={Home} />
    <Screen name="MyCars" component={MyCars} />
    <Screen name="Scheduling" component={Scheduling} />
    <Screen name="SchedulingComplete" component={SchedulingComplete} />
    <Screen name="SchedulingDetails" component={SchedulingDetails} />
    <Screen name="Splash" component={Splash} />
  </Navigator>
)

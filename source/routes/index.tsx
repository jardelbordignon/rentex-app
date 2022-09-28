import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

import { StackRoutes } from './stack.routes'

export const Routes = () => {
  const scheme = useColorScheme()
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackRoutes />
    </NavigationContainer>
  )
}

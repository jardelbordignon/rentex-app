import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

import { AppRoutes } from './app.routes'

export const Routes = () => {
  const scheme = useColorScheme()
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppRoutes />
    </NavigationContainer>
  )
}

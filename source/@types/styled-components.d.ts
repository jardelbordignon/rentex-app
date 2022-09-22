import 'styled-components/native'
import { ThemeType } from 's/theme'

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}

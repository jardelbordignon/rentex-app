import { RFValue } from 'react-native-responsive-fontsize'

const lightColors = {
  header: '#1B1B1F',

  background_primary: '#F4F5F6',
  background_secondary: '#FFFFFF',

  text: '#7A7A80',
  text_detail: '#AEAEB3',
  title: '#47474D',

  line: '#EBEBF0',

  main: '#DC1637',
  main_light: '#FDEDEF',
  success: '#03B252',

  shape: '#E1E1E8',
  shape_dark: '#29292E',
}

const baseTheme = {
  fontFamily: {
    /** Inter-Regular */
    primary_400: 'Inter-Regular',
    /** Inter-Medium */
    primary_500: 'Inter-Medium',
    /** Archivo-Regular */
    secondary_400: 'Archivo-Regular',
    /** Archivo-Medium */
    secondary_500: 'Archivo-Medium',
    /** Archivo-SemiBold */
    secondary_600: 'Archivo-SemiBold',
  },

  fontSize: {
    /** 12px */
    xs: RFValue(12),
    /** 14px */
    sm: RFValue(14),
    /** 16px */
    md: RFValue(16),
    /** 24px */
    lg: RFValue(24),
    /** 32px */
    xl: RFValue(32),
  },

  spacing: {
    /** 4px */
    '0.5': RFValue(4),
    /** 8px */
    '1': RFValue(8),
    /** 16px */
    '2': RFValue(16),
    /** 24px */
    '3': RFValue(24),
    /** 32px */
    '4': RFValue(32),
    /** 40px */
    '5': RFValue(40),
    /** 56px */
    '6': RFValue(56),
    /** 72px */
    '7': RFValue(72),
    /** 88px */
    '8': RFValue(88),
  },
}

// const commonColors = {
//   info: 'rgb(2, 136, 209)',
//   info_bg: '#b6effb',
//   warning: 'rgb(245, 124, 0)',
//   warning_bg: '#ffecb5',
//   success: 'rgb(56, 142, 60)',
//   success_bg: '#b6effb',
//   error: 'rgb(211, 47, 47)',
//   error_bg: '#f5c2c7',
//   white: '#F0F2F5',
//   black: '#111111',
// }

// const darkColors = {
//   ...commonColors,
//   text: '#F0F2F5',
//   background: '#222222',
// }

// const lightColors = {
//   ...commonColors,
//   text: '#222222',
//   background: '#F0F2F5',
// }

export const theme = {
  ...baseTheme,
  colors: lightColors,
}

export type ThemeType = typeof theme

// export default {
//   dark: { ...theme, colors: darkColors },
//   light: { ...theme, colors: lightColors },
// }

/** referêcia de opacidade em cor hexadecimal;
100% — FF
95% — F2
90% — E6
85% — D9
80% — CC
75% — BF
70% — B3
65% — A6
60% — 99
55% — 8C
50% — 80
45% — 73
40% — 66
35% — 59
30% — 4D
25% — 40
20% — 33
15% — 26
10% — 1A
5% — 0D
0% — 00

exemplo: branco opacidade 80% -> #FFFFFFCC
*/

export type ThemeColors = {
  background: string
  text: string
}

export type ThemeType = typeof baseTheme & ThemeColors

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
    primary_400: 'Inter-Regular',
    primary_500: 'Inter-Medium',
    secondary_400: 'Archivo-Regular',
    secondary_500: 'Archivo-Medium',
    secondary_600: 'Archivo-SemiBold',
  },

  fontSize: {
    sm: 14,
    md: 16,
    lg: 24,
    xl: 32,
  },

  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 40,
    8: 48,
    9: 56,
    10: 64,
    11: 72,
    12: 80,
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

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./source'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          s: './source',
        },
      },
    ],
  ],
}

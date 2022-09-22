module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./source'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', 'cjs'],
        alias: {
          s: './source',
        },
      },
    ],
  ],
}

/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Routes } from './routes'

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
    </GestureHandlerRootView>
  )
}

/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Routes } from './routes'

export function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222' }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Routes />
    </SafeAreaView>
  )
}

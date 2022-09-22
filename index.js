import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from 's/App'
import { Loading } from 's/components/atoms'
import { store } from 's/store'

import { name } from './app.json'

const AppWithRedux = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(name, () => AppWithRedux)

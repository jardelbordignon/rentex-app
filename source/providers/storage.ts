import AsyncStorage from '@react-native-async-storage/async-storage'

import { name as appName } from '../../app.json'

class Storage {
  public async clear(k: string | string[]): Promise<void> {
    const value = typeof k === 'string' ? '' : k.map(() => '')
    this.set(k, value)
  }

  public async get<T = any>(k: string | string[]): Promise<T> {
    // one item
    if (typeof k === 'string') {
      const data = await AsyncStorage.getItem(`@${appName}.${k}`)
      return data ? JSON.parse(data) : null
    }
    // many items
    const data = await AsyncStorage.multiGet(k.map(key => `@${appName}.${key}`))
    const obj = {}
    k.forEach((key, i) => {
      Object.assign(obj, { [key]: JSON.parse(data[i][1] || '') })
    })
    return obj as T
  }

  public async set<T = any>(k: string | string[], value: any): Promise<T> {
    // one item
    if (typeof k === 'string') {
      await AsyncStorage.setItem(`@${appName}.${k}`, JSON.stringify(value))
      return value
    }
    // many items
    await AsyncStorage.multiSet(
      k.map((key, i) => [`@${appName}.${key}`, JSON.stringify(value[i])])
    )
    return value
  }
}

export const storage = new Storage()

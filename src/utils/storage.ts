import { MMKV } from 'react-native-mmkv'

const generalStorage = new MMKV()

export const privateStorage = new MMKV({
  id: 'private',
  // encryptionKey: 'dealHunter2', // TODO: Move this to a env variable? or check if if will be better to use expo-securestore manually.
})

export const mmkvStorageConfig = {
  setItem: (key: string, data: boolean | string | number | Uint8Array) =>
    privateStorage.set(key, data),
  getItem: (key: string) => privateStorage.getString(key),
  removeItem: (key: string) => privateStorage.delete(key),
}

export default generalStorage

# redux-persist-buildfire-storage

redux-persist-buildfire-storage is using [BuildFire](https://github.com/BuildFire/sdk/wiki/File-System-Services) file system componente to persist redux state, and allowing it to be reloaded from the file system even when tha app is closed.

To use it following the code example below:

```
// configureStore.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import bf_storage from ''redux-persist-buildfire-storage'
import actionTypes from '../actionTypes.js'

import rootReducer from './reducers'
const storage = new bf_storage('myPersistFolder', actionTypes);

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
```
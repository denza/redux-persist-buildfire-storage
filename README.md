# redux-persist-buildfire-storage

```
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import FilesystemStorage from 'redux-persist-buildfire-storage';

const deviceStorage = new FilesystemStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ entity: entityReducer, category: categoryReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk, logger)));
  const persistor = persistStore(store);

  return { store, persistor };
};
```
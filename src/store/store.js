import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

// import storage from 'redux-persist/es/storage';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers/rootReducer';
    
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)  

  export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { persistor, store }
  }
    

  
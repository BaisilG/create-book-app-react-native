/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import createStore from './src/store/store';

const {persistor, store} = createStore();

import AppNavigation from './src/navigation/AppNavigation';

const App=()=> {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <PersistGate
        loading={
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> loading.... </Text>
          </View>
        }
        persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

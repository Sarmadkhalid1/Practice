import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './src/reducers/store';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {productsApi} from './src/features/apiSlice';
import MyContextProvider from './src/reducers/MyContext';

export default function App() {
  return (
    <MyContextProvider>
      <Provider store={store}>
        {/* <ApiProvider api={productsApi}> */}
        <View style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} />
          <MainNavigation />
        </View>
        {/* </ApiProvider> */}
      </Provider>
    </MyContextProvider>
  );
}

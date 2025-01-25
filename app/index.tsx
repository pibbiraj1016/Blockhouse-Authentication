import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppNavigator } from './navigation/AppNavigator';

export default function Index() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
        <AppNavigator />
      {/* </NavigationContainer> */}
    </Provider>
  );
}
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Colors from './resources/colors/Colors';
import Home from './resources/pages/Home';
import Fish from './resources/pages/Fish';
import Details from './resources/pages/Details';
import Videos from './resources/pages/Videos';
import Navigator from './resources/pages/Navigator';
import './i18n';

import {useTranslation} from 'react-i18next';

const App = () => {
  const {t, i18n} = useTranslation();
  const Stack = createStackNavigator();

  const getHeaderOptions = (title) => {
    let options = {
      headerStyle: {
        backgroundColor: Colors.primary,
        height: 50,
      },
      headerTintColor: Colors.accent,
      headerShown: true,
    };
    options.title = title;
    return options;
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primary}></StatusBar>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={getHeaderOptions(t('Home'))}
          component={Home}></Stack.Screen>
        <Stack.Screen
          name="Fish"
          options={getHeaderOptions(t('Fish'))}
          component={Fish}></Stack.Screen>
        <Stack.Screen
          name="Details"
          options={getHeaderOptions(t('Details'))}
          component={Details}></Stack.Screen>
        <Stack.Screen
          name="Videos"
          options={getHeaderOptions(t('Videos'))}
          component={Videos}></Stack.Screen>
        <Stack.Screen
          name="Navigator"
          options={getHeaderOptions(t('Navigator'))}
          component={Navigator}
          initialParams={{
            params: {
              latitude: 48.71395,
              longitude: 21.25808,
            },
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

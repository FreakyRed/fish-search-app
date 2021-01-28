/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import Realm from 'realm';

const App2 = () => {
  Realm.copyBundledRealmFiles();
  return <App />;
};

AppRegistry.registerComponent(appName, () => App2);

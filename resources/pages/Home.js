import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Colors from '../colors/Colors';
import HomeButton from '../components/HomeButton';

import {useTranslation} from 'react-i18next';

const Home = ({navigation}) => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <View
        style={{alignSelf: 'center', justifySelf: 'center', marginTop: 100}}>
        <Text style={styles.selectText}>{t('Fish Browser')}</Text>
        <View style={styles.buttons}>
          <HomeButton
            text="Fish"
            iconName="fish"
            navigation={navigation}></HomeButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.accent,
    width: '100%',
  },
  selectText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 20,
  },
  buttons: {
    width: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Home;

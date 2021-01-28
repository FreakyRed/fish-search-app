import React from 'react';
import {View, StyleSheet, Text, Pressable, FlatList} from 'react-native';
import Realm from 'realm';

import Colors from '../colors/Colors';
import {useTranslation} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const Fish = ({navigation, route}) => {
  const {t, i18n} = useTranslation();
  const language = RNLocalize.getLocales()[0].languageCode;
  let realm = new Realm();
  const data = realm.objects('Fish');

  return (
    <FlatList
      style={{marginTop: 10}}
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => (
        <Pressable
          onPress={() => {
            navigation.navigate('Details', item.id);
          }}>
          <View style={styles.card}>
            <View style={styles.title}>
              <Text
                style={styles.text}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                minimumFontScale={0.9}>
                {language === 'en' ? item.english_name : item.slovak_name}
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.descriptionText}>{item.venue}</Text>
            </View>
          </View>
        </Pressable>
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '85%',
    height: 105,
    backgroundColor: Colors.primary,
    padding: 30,
    margin: 4,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    width: '115%',
    backgroundColor: Colors.accent,
    height: 30,
    alignSelf: 'flex-start',
    marginTop: -20,
    alignContent: 'center',
    borderRadius: 8,
    marginLeft: -20,
  },
  text: {
    color: Colors.primary,
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
  },
  description: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
    alignItems: 'flex-end',
  },
  descriptionText: {
    color: Colors.accent,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
});

export default Fish;

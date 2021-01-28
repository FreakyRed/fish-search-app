import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import * as RNLocalize from 'react-native-localize';

import Colors from '../colors/Colors';
import Realm from 'realm';
import Icon from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';

const Details = ({navigation, route}) => {
  const language = RNLocalize.getLocales()[0].languageCode;
  const {t, i18n} = useTranslation();
  let realm = new Realm();
  const details = realm.objects('Fish').filtered('id == $0', route.params)[0];

  // name,latitude,longitude,country,continent,prominence,range,description
  return (
    <ScrollView style={{height: '100%'}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {language === 'en' ? details.english_name : details.slovak_name}
        </Text>
        <Text style={styles.titleText}>{details.venue}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../images/fish.jpg')}
          style={styles.image}></Image>
      </View>

      <View style={styles.icons}>
        <Pressable
          onPress={() => {
            navigation.navigate('Videos', details.english_name);
          }}>
          <View style={styles.button}>
            <Icon
              name="folder-video"
              size={35}
              color={Colors.accent}
              style={{paddingRight: 30}}></Icon>
            <Text style={styles.buttonText}>{t('Videos')}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Navigator', {
              latitude: details.latitude,
              longitude: details.longitude,
            });
          }}>
          <View style={styles.button}>
            <Icon name="location-pin" size={35} color={Colors.accent}></Icon>
            <Text style={styles.buttonText}>{t('Location')}</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>{t('Description')}:</Text>
        <Text style={styles.descriptions}>
          {language === 'en'
            ? details.description_english
            : details.description_slovak}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    width: '90%',
    backgroundColor: Colors.grey,
    paddingBottom: 12,
    marginTop: 10,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 120,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent,
  },
  description: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  descriptionText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  descriptions: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  icons: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 15,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    flexWrap: 'wrap',
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.accent,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default Details;

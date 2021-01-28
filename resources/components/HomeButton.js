import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../colors/Colors';
import {useTranslation} from 'react-i18next';

const HomeButton = (props) => {
  const {t, i18n} = useTranslation();
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => {
          props.navigation.navigate(props.text);
        }}>
        <Icon
          name={props.iconName}
          size={40}
          color={Colors.accent}
          style={{alignSelf: 'center'}}></Icon>
        <Text style={styles.text}>{t(props.text)}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 30,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginTop: 30,
  },
  text: {
    color: Colors.accent,
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default HomeButton;

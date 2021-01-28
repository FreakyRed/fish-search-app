import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapViewNavigator from '../components/MapViewNavigator';
import {useTranslation} from 'react-i18next';

const Navigator = ({route}) => {
  const {t, i18n} = useTranslation();
  const [originPosition, setOriginPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    requestGPSPermissions();
    return () => Geolocation.stopObserving();
  }, []);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        if (
          originPosition.latitude !== position.coords.latitude.toFixed(2) ||
          originPosition.longitude !== position.coords.longitude.toFixed(2)
        ) {
          setOriginPosition({
            latitude: parseFloat(position.coords.latitude.toFixed(2)),
            longitude: parseFloat(position.coords.longitude.toFixed(2)),
          });
        }
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );
  };

  const requestGPSPermissions = async () => {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Fish Browser',
          message: t('Fish Browser needs to acess your GPS location.'),
          buttonNeutral: t('Ask Me Later'),
          buttonNegative: t('Cancel'),
          buttonPositive: t('OK'),
        },
      )
        .then((result) => {
          console.log(result);
          if (result === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentPosition();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <MapViewNavigator
      origin={{
        latitude: originPosition.latitude,
        longitude: originPosition.longitude,
      }}
      destination={{
        latitude: route.params.latitude,
        longitude: route.params.longitude,
      }}></MapViewNavigator>
  );
};

const styles = StyleSheet.create({});

export default Navigator;

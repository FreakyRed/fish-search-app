import React, {useState} from 'react';
import {View, StyleSheet, LogBox} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyA777OUGJEFjMj3z-ExIq-0Uel0ZHf44Ks';

LogBox.ignoreLogs([
  'MapViewDirections Error: Error on GMAPS route request: ZERO_RESULTS',
]);

const MapViewNavigator = (props) => {
  //   const [origin, setOrigin] = useState(props.origin);
  const [destination, setDestination] = useState(props.destination);

  const origin = {
    latitude: props.origin.latitude,
    longitude: props.origin.longitude,
  };

  const initialRegion = {
    latitude: parseFloat(destination.latitude),
    longitude: parseFloat(destination.longitude),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const destinationF = {
    latitude: parseFloat(destination.latitude),
    longitude: parseFloat(destination.longitude),
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      style={styles.map}>
      <MapViewDirections
        origin={origin}
        destination={destinationF}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="hotpink"></MapViewDirections>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapViewNavigator;

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import axios from 'axios';
import YouTube from 'react-native-youtube';
import {useTranslation} from 'react-i18next';

const Videos = ({route}) => {
  const {t, i18n} = useTranslation();
  const YT_URL = 'https://www.googleapis.com/youtube/v3/search?';
  const API_KEY = 'AIzaSyA777OUGJEFjMj3z-ExIq-0Uel0ZHf44Ks';
  let slug = route.params.split(' ').join(',');
  console.log(slug);
  const params = `key=${API_KEY}&part=snippet&maxResults=1&q=${slug}`;

  let videos = [];
  const [videolinks, setVideolinks] = useState([]);

  useEffect(() => {
    axios
      .get(`${YT_URL}${params}`)
      .then((response) => {
        // console.log(response.data.items);
        response.data.items.forEach((element) => {
          videos.push(element.id.videoId);
        });
        console.log(videos);
        return videos;
      })
      .then((videos) => {
        setVideolinks(videos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={videolinks}
        keyExtractor={(item) => item}
        renderItem={({item, index}) => (
          <View style={styles.video}>
            <YouTube
              videoId={item}
              play={false}
              apiKey={API_KEY}
              style={{alignSelf: 'stretch', height: 250}}
            />
          </View>
        )}></FlatList>
      <Text style={styles.text}>
        {t('No more videos were loaded to prevent crashing the app.')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    marginTop: 20,
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
});

export default Videos;

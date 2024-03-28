import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {useState, useCallback, useRef, useEffect} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {API_KEY} from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailVideo = ({route}) => {
  const [playing, setPlaying] = useState(false);
  const [getRecipe, setGetRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {recipe_id} = route.params;

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const handleGetRecipe = async () => {
    try {
      setIsLoading(true);
      // const userID = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(
        `${API_KEY}/recipe/getbyid/${recipe_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('GET RECIPE = ', response);
      const {data} = response.data;
      setIsLoading(false);
      console.log(data);
      setGetRecipe(current => [...current, ...data]);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);
  return (
    <View>
      {getRecipe.map((item, index) => (
        <View key={index}>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={'MWJYEvCB5dw'}
            onChangeState={onStateChange}
          />
          <Text style={styles.txt}>{item.title}</Text>
        </View>
      ))}
      {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
    </View>
  );
};

export default DetailVideo;

const styles = StyleSheet.create({
  txt: {
    color: '#000',
    fontSize: 20,
    marginLeft: 30,
    marginTop: -70,
  },
});

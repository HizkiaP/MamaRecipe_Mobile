import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ingredients from '../ingredients';
import {API_KEY} from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailIngredients = ({navigation, route}) => {
  const [tab, setTab] = useState('video step');
  const [getRecipe, setGetRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {recipe_id} = route.params;

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
    <SafeAreaView style={styles.container}>
      {getRecipe.map((item, index) => (
        <ImageBackground
          style={styles.background}
          source={{uri: item.photo}}
          key={index}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.arrow}
              source={require('./../../../assets/arrow-back.png')}
            />
          </TouchableOpacity>
          <View style={styles.wrapper}>
            <Image source={require('./../../../assets/bookmarked.png')} />
            <Image source={require('./../../../assets/like.png')} />
          </View>
          <View style={styles.wrapperTitle}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title2}>{`By ${item.username}`}</Text>
          </View>
          {/* <View style={styles.box}></View> */}
          <ScrollView style={styles.scroll}>
            <View style={styles.wrapperVideo}>
              <Text
                onPress={() => setTab('ingredients')}
                style={styles.textIngredients}>
                Ingredients
              </Text>
              <Text
                onPress={() => setTab('video step')}
                style={styles.textVideo}>
                Video Step
              </Text>
            </View>
            {tab === 'video step' && (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailVideo', {
                      recipe_id: item.recipe_id,
                    })
                  }>
                  <View style={styles.wrapperPlay}>
                    <Image source={require('./../../../assets/play-btn.png')} />
                    <View style={styles.wrapperStep}>
                      <Text style={styles.step1}>{item.title}</Text>
                      <Text style={styles.step2}>Tutorial</Text>
                      {/* <Text>recipe id: {JSON.stringify(recipe_id)}</Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
                <TextInput style={styles.comment} placeholder="Comment :" />
                <TouchableHighlight style={styles.btn}>
                  <View>
                    <Text style={styles.txt}>Post Comment</Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.wrapperComment}>
                  <Text style={styles.comment2}>Comment :</Text>
                  <View style={styles.wrapperEnd}>
                    <Image
                      source={require('./../../../assets/ellipse128.png')}
                    />
                    <View>
                      <Text style={styles.textEnd1}>Ayudia</Text>
                      <Text style={styles.textEnd2}>
                        Nice recipe. simple and delicious, thankyou
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            )}
            {tab === 'ingredients' && <Ingredients recipe_id={recipe_id} />}
          </ScrollView>
        </ImageBackground>
      ))}
    </SafeAreaView>
  );
};

export default DetailIngredients;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  background: {
    // width: '100%',
    // height: '40%',
  },
  arrow: {
    marginLeft: 35,
    marginTop: 25,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 35,
    marginTop: 125,
  },
  wrapperTitle: {
    marginLeft: 35,
    marginRight: 70,
    marginTop: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#FBFBFB',
    fontSize: 34,
    width: '50%',
  },
  title2: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  scroll: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 40,
    paddingLeft: 30,
    paddingTop: 25,
    height: 400,
    // flex: 1,
  },
  //   box: {
  //     backgroundColor: '#FFFFFF',
  //     borderTopLeftRadius: 15,
  //     borderTopRightRadius: 15,
  //     marginTop: 40,
  //     paddingLeft: 30,
  //     paddingTop: 25,
  //     height: 400,
  //   },
  wrapperVideo: {
    flexDirection: 'row',
    gap: 20,
  },
  // textIngredients: {
  //   color: '#18172B',
  // },
  // textVideo: {
  //   color: '#18172B',
  // },
  wrapperPlay: {
    backgroundColor: '#FAF7ED',
    borderRadius: 13,
    width: '90%',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    marginTop: 20,
    flexDirection: 'row',
    gap: 35,
  },
  wrapperStep: {
    paddingTop: 5,
  },
  step1: {
    color: '#B6B6B6',
    fontSize: 18,
  },
  step2: {
    color: '#666666',
    fontSize: 14,
  },
  comment: {
    backgroundColor: '#FAF7ED',
    color: '#666666',
    fontSize: 14,
    width: '90%',
    borderRadius: 13,
    marginTop: 20,
    paddingBottom: 200,
    paddingLeft: 20,
  },
  btn: {
    backgroundColor: '#EFC81A',
    borderRadius: 10,
    width: '90%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
  },
  wrapperComment: {
    marginBottom: 70,
  },
  comment2: {
    color: '#666666',
    fontSize: 14,
  },
  wrapperEnd: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 30,
  },
  textEnd1: {
    color: '#000000',
    fontSize: 10,
  },
  textEnd2: {
    color: '#000000',
    fontSize: 12,
  },
});

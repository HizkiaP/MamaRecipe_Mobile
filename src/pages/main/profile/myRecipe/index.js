import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_KEY} from '@env';
import axios from 'axios';

const MyRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  const handleGetRecipe = async () => {
    const response = await axios.get(`${API_KEY}/recipe`);
    const {data} = response.data;
    console.log(data);
    setRecipe(data);
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);
  console.log('INI ADALAH RECIPE ', recipe);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Image source={require('./../../../../assets/group50.png')} />
        <Text style={styles.title}>My Recipe</Text>
      </View>
      {recipe?.map(item => (
        <View key={item.recipe_id} style={styles.wrapperRecipe}>
          <View>{item.photo && <Image source={{uri: item.photo}} />}</View>
          <View style={styles.wrapperTxt}>
            <Text style={styles.txt1}>{item.title}</Text>
            <Text style={styles.txt2}>In Veg Pizza</Text>
            <Text style={styles.txt3}>Spicy</Text>
          </View>
        </View>
      ))}
      {/* source={{uri: item.photo}} */}
      {/* <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../../assets/rectangle11.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Veg Loaded</Text>
          <Text style={styles.txt2}>In Pizza Mania</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default MyRecipe;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
  },
  wrapperTitle: {
    flexDirection: 'row',
  },
  title: {
    color: '#EEC302',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 75,
  },
  wrapperRecipe: {
    flexDirection: 'row',
    marginTop: 30,
  },
  wrapperTxt: {
    marginTop: 1.5,
    marginLeft: 20,
  },
  txt1: {
    color: '#18172B',
    fontSize: 18,
    paddingBottom: 5,
  },
  txt2: {
    color: '#6E80B0',
    fontSize: 14,
    paddingBottom: 5,
  },
  txt3: {
    color: '#18172B',
    fontSize: 16,
  },
});

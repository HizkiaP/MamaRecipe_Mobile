import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_KEY} from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Ingredients = ({recipe_id}) => {
  const [getRecipe, setGetRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const {recipe} = props;
  // const {recipe_id} = route.params;

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
    <View style={styles.recipe}>
      {/* <Text>recipe id: {JSON.stringify(recipe_id)}</Text> */}
      {getRecipe.map((item, index) => (
        <ScrollView style={styles.scroll} key={index}>
          <Text style={styles.text}>{item.ingredients}</Text>
        </ScrollView>
      ))}
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  recipe: {
    backgroundColor: '#FAF7ED',
    color: '#666666',
    fontSize: 14,
    width: '90%',
    borderRadius: 13,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 20,
  },
  text: {
    width: '80%',
  },
  scroll: {
    paddingBottom: 'auto',
  },
});

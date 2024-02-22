import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.search}
          placeholder="Search Pasta, Bread, etc"
        />
      </View>

      {/* Popular Section */}
      <View>
        <Text style={styles.txtPopular}>Popular for You</Text>
      </View>
      <View style={styles.wrapperImage}>
        <TouchableHighlight onPress={() => navigation.navigate('DetailMenu')}>
          <View>
            <Image source={require('./../../../assets/group48.png')} />
            <Text style={styles.textImage1}>Soup</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('DetailMenu')}>
          <View>
            <Image source={require('./../../../assets/group47.png')} />
            <Text style={styles.textImage2}>Chicken</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('DetailMenu')}>
          <View>
            <Image source={require('./../../../assets/group49.png')} />
            <Text style={styles.textImage3}>Seafood</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('DetailMenu')}>
          <View>
            <Image source={require('./../../../assets/group47.png')} />
            <Text style={styles.textImage4}>Dessert</Text>
          </View>
        </TouchableHighlight>
      </View>

      {/* End Popular Section */}

      {/* New Recipes Section */}
      <View>
        <Text style={styles.txtNew}>New Recipes</Text>
      </View>
      <View style={styles.wrapperImage2}>
        <View>
          <Image
            style={styles.photo}
            source={require('./../../../assets/toast-bread.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.photo}
            source={require('./../../../assets/egg-sandwich.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.photo}
            source={require('./../../../assets/beef-steak.jpg')}
          />
        </View>
      </View>
      {/* End New Recipes Section */}

      {/* Popular Recipes Section */}
      <View style={styles.wrapperText}>
        <Text style={styles.txtRecipe}>Popular Recipes</Text>
        <Text style={styles.txtInfo}>More info</Text>
      </View>
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/group43.png')} />
        </View>
        <View>
          <Text>Teriyaki Salmon</Text>
          <Text>spicy, salted</Text>
          <View style={styles.wrapperRate}>
            <Image source={require('./../../../assets/rate.png')} />
            <Text>4.7</Text>
          </View>
        </View>
      </View>

      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/group43.png')} />
        </View>
        <View>
          <Text>Teriyaki Salmon</Text>
          <Text>spicy, salted</Text>
          <View style={styles.wrapperRate}>
            <Image source={require('./../../../assets/rate.png')} />
            <Text>4.7</Text>
          </View>
        </View>
      </View>
      {/* End Popular Recipes Section */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  search: {
    width: '100%',
    backgroundColor: '#ebe8e8',
    borderRadius: 14,
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 30,
  },
  txtPopular: {
    fontSize: 20,
    color: '#3F3A3A',
  },
  wrapperImage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
  },
  textImage1: {
    color: '#000',
    paddingLeft: 15,
  },
  textImage2: {
    color: '#000',
    paddingLeft: 7,
  },
  textImage3: {
    color: '#000',
    paddingLeft: 4,
  },
  textImage4: {
    color: '#000',
    paddingLeft: 7,
  },
  txtNew: {
    fontSize: 20,
    color: '#18172B',
  },
  wrapperImage2: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    // justifyContent: 'space-between',
  },
  photo: {
    borderRadius: 17,
    width: 130,
    height: 160,
    marginRight: 20,
  },
  wrapperText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txtRecipe: {
    fontSize: 20,
    color: '#3F3A3A',
  },
  txtInfo: {
    fontSize: 14,
    color: '#6D61F2',
  },
  wrapperRecipe: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    flexDirection: 'row',
    marginTop: 20,
  },
  wrapperMenu: {
    paddingLeft: 20,
  },
  wrapperRate: {
    flexDirection: 'row',
    gap: 7,
  },
});

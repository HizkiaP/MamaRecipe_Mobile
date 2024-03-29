import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SavedRecipe = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../../../../assets/group50.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Saved Recipe</Text>
      </View>
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../../assets/rectangle10.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Margherita</Text>
          <Text style={styles.txt2}>In Veg Pizza</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
      </View>
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../../assets/rectangle11.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Veg Loaded</Text>
          <Text style={styles.txt2}>In Pizza Mania</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SavedRecipe;

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

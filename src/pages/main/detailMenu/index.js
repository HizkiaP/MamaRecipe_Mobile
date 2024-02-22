import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailMenu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Image source={require('./../../../assets/group50.png')} />
        <Text style={styles.title}>Popular Menu</Text>
      </View>
      {/* 1 */}
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/rectangle10.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Margherita</Text>
          <Text style={styles.txt2}>In Veg Pizza</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
        <View style={styles.wrapperBookLike}>
          <Image source={require('./../../../assets/bookmarked.png')} />
          <Image source={require('./../../../assets/like.png')} />
        </View>
      </View>
      {/* 2 */}
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/rectangle11.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Veg Loaded</Text>
          <Text style={styles.txt2}>In Veg Pizza</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
        <View style={styles.wrapperBookLike}>
          <Image source={require('./../../../assets/bookmarked.png')} />
          <Image source={require('./../../../assets/like.png')} />
        </View>
      </View>
      {/* 3 */}
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/rectangle12.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Farm House</Text>
          <Text style={styles.txt2}>In Veg Pizza</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
        <View style={styles.wrapperBookLike}>
          <Image source={require('./../../../assets/bookmark.png')} />
          <Image source={require('./../../../assets/like.png')} />
        </View>
      </View>
      {/* 4 */}
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/rectangle13.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Fresh Veggie</Text>
          <Text style={styles.txt2}>In Veg Pizza</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
        <View style={styles.wrapperBookLike}>
          <Image source={require('./../../../assets/bookmarked.png')} />
          <Image source={require('./../../../assets/like.png')} />
        </View>
      </View>
      {/* 5 */}
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/rectangle14.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Tomato</Text>
          <Text style={styles.txt2}>In Veg Pizza</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
        <View style={styles.wrapperBookLike}>
          <Image source={require('./../../../assets/bookmark.png')} />
          <Image source={require('./../../../assets/liked.png')} />
        </View>
      </View>
      {/* 6 */}
      <View style={styles.wrapperRecipe}>
        <View>
          <Image source={require('./../../../assets/rectangle11.png')} />
        </View>
        <View style={styles.wrapperTxt}>
          <Text style={styles.txt1}>Veg Loaded</Text>
          <Text style={styles.txt2}>In Veg Pizza</Text>
          <Text style={styles.txt3}>Spicy</Text>
        </View>
        <View style={styles.wrapperBookLike}>
          <Image source={require('./../../../assets/bookmarked.png')} />
          <Image source={require('./../../../assets/like.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailMenu;

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
  wrapperBookLike: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 45,
    gap: 10,
  },
});

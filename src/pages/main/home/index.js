import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useEffect, useState} from 'react';
import {API_KEY} from '@env';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 4,
  });

  const handleGetRecipe = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_KEY}/recipe`, {params});
      console.log('GET RECIPE = ', response);
      const {data} = response.data;
      setIsLoading(false);
      console.log(data);
      setRecipe(current => [...current, ...data]);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);

  // useEffect(() => {
  //   handleGetRecipe({page: params.page, limit: params.limit});
  // }, [params]);

  const renderLoader = () => {
    return (
      isLoading && (
        <View>
          <ActivityIndicator
            size="small"
            color="#0000ff"
            style={styles.loader}
          />
        </View>
      )
    );
  };

  const loadMoreItem = () => {
    setParams(current => ({...current, page: current.page + 1}));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.search}>
          <AntDesign name="search1" size={23} color="#C4C4C4" />
          <TextInput placeholder="Search Pasta, Bread, etc" />
        </View>
      </TouchableOpacity>

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
      <ScrollView style={styles.wrapperImage2} horizontal={true}>
        {recipe.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailIngredients', {
                recipe_id: item.recipe_id,
              })
            }
            style={styles.wrapperToast}
            key={index}>
            {item.photo && (
              <Image style={styles.photo} source={{uri: item.photo}} />
            )}
            <Text style={styles.toast}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        {/* <View style={styles.wrapperToast}>
          <Image
            style={styles.photo}
            source={require('./../../../assets/egg-sandwich.jpg')}
          />
          <Text style={styles.toast}>Sandwich with Egg</Text>
        </View>
        <View style={styles.wrapperToast}>
          <Image
            style={styles.photo}
            source={require('./../../../assets/beef-steak.jpg')}
          />
          <Text style={styles.toast}>Sandwich with Egg</Text>
        </View> */}
      </ScrollView>
      {/* End New Recipes Section */}

      {/* Popular Recipes Section */}
      <View style={styles.wrapperText}>
        <Text style={styles.txtRecipe}>All Recipes</Text>
        <Text style={styles.txtInfo}>More info</Text>
      </View>
      <View style={styles.wrapperRecipe}>
        {/* <FlatList
          data={recipe}
          renderItem={({item}) => (
            <View style={styles.wrapperToast}>
              {item.photo && (
                <Image style={styles.photo} source={{uri: item.photo}} />
              )}
              <Text style={styles.toast}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.recipe_id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
        /> */}
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
  loader: {
    marginTop: 65,
  },
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  // wrapperSearch: {
  //   flexDirection: 'row',
  // },
  search: {
    width: '100%',
    backgroundColor: '#ebe8e8',
    borderRadius: 14,
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  wrapperToast: {
    position: 'relative',
  },
  toast: {
    position: 'absolute',
    color: '#FBFBFB',
    left: '10%',
    right: '10%',
    bottom: '10%',
    width: '70%',
    fontSize: 16,
    // textShadowColor: '2px 1.5px #000000',
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

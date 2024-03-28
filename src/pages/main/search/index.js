import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {API_KEY} from '@env';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Search = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sort, setSort] = useState('ASC');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${API_KEY}/search?keyword=${searchKeyword}&sort=${sort}&limit=${limit}`,
      );
      // console.log(response);
      const result = response.data;
      setRecipe(result);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSort = () => {
    setSort(prevSort => (prevSort === 'ASC' ? 'DESC' : 'ASC'));
  };

  useEffect(() => {
    handleSearch({searchKeyword, sort, limit});
  }, [sort]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperSort}>
        <View style={styles.search}>
          <AntDesign name="search1" size={23} color="#C4C4C4" />
          <TextInput
            placeholder="Search Pasta, Bread, etc"
            value={searchKeyword}
            onChangeText={text => setSearchKeyword(text)}
            onEndEditing={handleSearch}
            // onPress={() => navigation.navigate('Search')}
          />
        </View>
        <View style={styles.sort}>
          <TouchableOpacity onPress={() => handleSort()}>
            <Text style={styles.txtSort}>Sort</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {recipe?.map(item => (
          <View key={item.recipe_id} style={styles.wrapperRecipe}>
            <View>
              {item.photo && (
                <Image style={styles.photo} source={{uri: item.photo}} />
              )}
            </View>
            <View style={styles.wrapperTxt}>
              <Text style={styles.txt1}>{item.title}</Text>
              <Text style={styles.txt2}>By Lily Steinfield</Text>
              {/* <Text style={styles.txt3}>Spicy</Text> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  wrapperSort: {
    flexDirection: 'row',
  },
  search: {
    width: '80%',
    backgroundColor: '#ebe8e8',
    // borderRadius: 14,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 20,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sort: {
    backgroundColor: '#ebe8e8',
    width: '20%',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    borderColor: 'black',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    marginLeft: 1,
    // borderLeftColor: 'red',
    // borderTopRightRadius: 14,
  },
  // txtSort: {
  //   color: '#C4C4C4',
  // },
  wrapperRecipe: {
    flexDirection: 'row',
    marginTop: 30,
    // marginRight: 20,
  },
  wrapperTxt: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 18,
  },
});

import {
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_KEY} from '@env';
import axios from 'axios';

const MyRecipe = ({navigation}) => {
  const [recipe, setRecipe] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateRecipe, setUpdateRecipe] = useState({
    title: '',
    ingredients: '',
    photo: '',
    video: '',
  });

  const handleGetRecipe = async () => {
    try {
      const userID = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(`${API_KEY}/recipe/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const {data} = response.data;
      console.log('DATA = ', data);
      setRecipe(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const selectPhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      if (res.didCancel) {
        console.log('Cancelled Image Picker');
        console.log(res.assets[0]);
      }
      setUpdateRecipe({
        ...updateRecipe,
        photo: res.assets[0],
      });
    });
  };

  const handleUpdateRecipe = async recipeId => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('test recipe id = ', recipeId);
      const form = new FormData();
      form.append('title', updateRecipe.title);
      form.append('ingredients', updateRecipe.ingredients);
      console.log('test photo update = ', updateRecipe.photo);
      if (updateRecipe.photo.uri) {
        form.append('photo', {
          uri: updateRecipe.photo.uri,
          name: updateRecipe.photo.fileName,
          fileName: updateRecipe.photo.fileName,
          type: updateRecipe.photo.type,
        });
      }
      form.append('video', updateRecipe.video);
      console.log(form);
      const response = await axios.put(`${API_KEY}/recipe/${recipeId}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      // const {data} = response.data;
      // console.log('DATA = ', data);
      await handleGetRecipe();
      setUpdateRecipe(form);
      console.log(response);
      Alert.alert('Update Recipe Successful!', 'Update Recipe Successful!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      setModalVisible(false);
    } catch (error) {
      console.log(error.response);
      Alert.alert('Update Recipe Failed!', 'Update Recipe Failed', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const handleDeleteRecipe = async recipeId => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.delete(`${API_KEY}/recipe/${recipeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setRecipe(prevRecipes =>
        prevRecipes.filter(item => item.recipe_id !== recipeId),
      );
      Alert.alert('Delete Recipe Successful!', 'Delete Recipe Successful!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);
  console.log('INI ADALAH RECIPE ', recipe);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../../../../assets/group50.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>My Recipe</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {recipe?.map(formula => (
          <View key={formula.recipe_id} style={styles.wrapperRecipe}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailIngredients', {
                  recipe_id: formula.recipe_id,
                })
              }>
              {formula.photo && (
                <Image style={styles.photo} source={{uri: formula.photo}} />
              )}
            </TouchableOpacity>
            <View style={styles.wrapperTxt}>
              <Text style={styles.txt1}>{formula.title}</Text>
              <Text style={styles.txt2}>{`By Lily Steinfield`}</Text>
              <Text style={styles.txt3}>Spicy</Text>
            </View>
            <View style={styles.wrapperEdit}>
              <TouchableHighlight
                onPress={() => setModalVisible(true)}
                style={styles.update}>
                <Text>Update</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => handleDeleteRecipe(formula.recipe_id)}
                style={styles.delete}>
                <Text>Delete</Text>
              </TouchableHighlight>
              <Modal visible={modalVisible} animationType="slide">
                <View style={styles.wrapperModal}>
                  <View style={styles.wrapperTitle2}>
                    <Text style={styles.title1}>Update Your Recipe</Text>
                  </View>
                  <View>
                    <TextInput
                      style={styles.inputBtn}
                      placeholder="Title"
                      value={updateRecipe.title}
                      onChangeText={value =>
                        setUpdateRecipe(prevRecipe => ({
                          ...prevRecipe,
                          title: value,
                        }))
                      }
                    />
                    <TextInput
                      style={styles.desc}
                      placeholder="Description"
                      value={updateRecipe.ingredients}
                      onChangeText={value =>
                        setUpdateRecipe(prevRecipe => ({
                          ...prevRecipe,
                          ingredients: value,
                        }))
                      }
                    />
                    <TouchableOpacity
                      onPress={selectPhoto}
                      style={styles.inputBtn}>
                      <Text style={styles.add}>Add Photo</Text>
                    </TouchableOpacity>
                    <TextInput
                      style={styles.inputBtn}
                      placeholder="Add Video"
                      value={updateRecipe.video}
                      onChangeText={value =>
                        setUpdateRecipe(prevRecipe => ({
                          ...prevRecipe,
                          video: value,
                        }))
                      }
                    />
                  </View>
                  <View style={styles.wrapperbtn}>
                    <TouchableHighlight
                      style={styles.btn}
                      onPress={() => handleUpdateRecipe(formula.recipe_id)}>
                      <View>
                        <Text style={styles.txt}>UPDATE</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                  {/* <Button
                    title="Close"
                    color="#EFC81A"
                    // onPress={() => setModalVisible(false)}
                  /> */}
                </View>
              </Modal>
            </View>
          </View>
        ))}
      </ScrollView>
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
  scrollView: {
    marginBottom: 80,
  },
  wrapperRecipe: {
    flexDirection: 'row',
    marginTop: 30,
    marginRight: 50,
    // backgroundColor: '#fff',
  },
  wrapperTxt: {
    marginTop: 1.5,
    marginLeft: 15,
    marginRight: 10,
    // width: '90%',
  },
  txt1: {
    color: '#18172B',
    fontSize: 18,
    paddingBottom: 5,
    // width: '80%',
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
  photo: {
    width: 80,
    height: 80,
    borderRadius: 18,
  },
  wrapperEdit: {
    gap: 5,
    justifyContent: 'center',
  },
  update: {
    backgroundColor: '#EFC81A',
    alignItems: 'center',
  },
  delete: {
    backgroundColor: '#EFC81A',
    alignItems: 'center',
  },
  wrapperModal: {
    marginLeft: 25,
    marginRight: 25,
  },
  wrapperTitle2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title1: {
    color: '#EFC81A',
    fontSize: 26,
  },
  inputBtn: {
    backgroundColor: '#F5F5F5',
    borderRadius: 9,
    width: '100%',
    height: 60,
    marginBottom: 15,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  add: {
    color: '#999999',
  },
  desc: {
    backgroundColor: '#F5F5F5',
    borderRadius: 9,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 20,
    paddingBottom: 200,
  },
  wrapperbtn: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#EFC81A',
    borderRadius: 9,
    width: '50%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
  },
});

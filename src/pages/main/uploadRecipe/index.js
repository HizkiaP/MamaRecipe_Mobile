import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_KEY} from '@env';
import axios from 'axios';

const Upload = () => {
  const [addRecipe, setAddRecipe] = useState({
    title: '',
    ingredients: '',
    photo: '',
    video: '',
  });
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [photo, setPhoto] = useState('');
  const [video, setVideo] = useState('');

  // const handleSelectPhoto = () => {
  //   try {
  //     let options = {
  //       mediaType: 'photo',
  //       maxHeight: 2000,
  //       maxWidth: 2000,
  //       // storageOptions: {
  //       //   path: 'photo',
  //       // },
  //     };

  //     launchImageLibrary(options, async res => {
  //       if (res.didCancel) {
  //         console.log('Cancelled Image Picker');
  //         return;
  //       }
  //       const result = res.assets[0].uri;
  //       setPhoto({
  //         ...photo,
  //         photo: res.assets[0].uri,
  //       });
  //       console.log(result);
  //       const formData = new FormData();
  //       formData.append('file', {
  //         uri: result.uri,
  //         name: result.fileName,
  //         fileName: result.fileName,
  //         type: result.type,
  //       });
  //       const response = await axios.post(`${API_KEY}/recipe`, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });
  //       console.log(response);
  //       // setPhoto(result);
  //     });
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  const selectPhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      if (res.didCancel) {
        console.log('Cancelled Image Picker');
        console.log(res.assets[0]);
      }
      setAddRecipe({
        ...addRecipe,
        photo: res.assets[0],
      });
    });
  };

  const handleAddRecipe = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const form = new FormData();
      form.append('title', addRecipe.title);
      console.log('test photo = ', addRecipe.photo);
      form.append('ingredients', addRecipe.ingredients);
      if (addRecipe.photo.uri) {
        form.append('photo', {
          uri: addRecipe.photo.uri,
          name: addRecipe.photo.fileName,
          fileName: addRecipe.photo.fileName,
          type: addRecipe.photo.type,
        });
      }
      form.append('video', addRecipe.video);
      console.log(form);
      const response = await axios.post(`${API_KEY}/recipe`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      Alert.alert('Add Recipe Successful!', 'Add Recipe Successful!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } catch (error) {
      console.log(error.response);
      Alert.alert('Add Recipe Failed!', 'Add Recipe Failed', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const handleChange = (field, value) => {
    setAddRecipe({
      ...addRecipe,
      [field]: value,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title1}>Add Your Recipe</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputBtn}
          placeholder="Title"
          value={addRecipe.title}
          onChangeText={text => handleChange('title', text)}
        />
        <TextInput
          style={styles.desc}
          placeholder="Description"
          value={addRecipe.ingredients}
          onChangeText={text => handleChange('ingredients', text)}
        />
        <TouchableOpacity onPress={selectPhoto} style={styles.inputBtn}>
          <Text style={styles.add}>Add Photo</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputBtn}
          placeholder="Add Video"
          value={addRecipe.video}
          onChangeText={text => handleChange('video', text)}
        />
      </View>
      <View style={styles.wrapperbtn}>
        <TouchableHighlight style={styles.btn} onPress={handleAddRecipe}>
          <View>
            <Text style={styles.txt}>POST</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  wrapperTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  title1: {
    color: '#EFC81A',
    fontSize: 26,
  },
  inputBtn: {
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
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
    marginTop: 5,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
  },
});

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_KEY} from '@env';
import axios from 'axios';

const Upload = () => {
  const [addRecipe, setAddRecipe] = useState({
    title: '',
    ingredients: '',
    video: '',
  });
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [photo, setPhoto] = useState('');
  const [video, setVideo] = useState('');

  const handleAddRecipe = async () => {
    try {
      const form = new FormData();
      form.append('title', title);
      form.append('ingredients', ingredients);
      form.append('video', video);
      console.log(form);
      const response = await axios.post(`${API_KEY}/recipe`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
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
      console.log(error);
    }
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
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.desc}
          placeholder="Description"
          value={ingredients}
          onChangeText={setIngredients}
        />
        <TextInput style={styles.inputBtn} placeholder="Add Photo" />
        <TextInput
          style={styles.inputBtn}
          placeholder="Add Video"
          value={video}
          onChangeText={setVideo}
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
    marginTop: 60,
    marginBottom: 50,
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
  },
  desc: {
    backgroundColor: '#fff',
    borderRadius: 9,
    width: '100%',
    height: 200,
    marginBottom: 15,
    paddingLeft: 20,
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

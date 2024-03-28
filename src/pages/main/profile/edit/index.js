import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Link} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_KEY} from '@env';

const EditPage = ({navigation}) => {
  const [photo, setPhoto] = useState(null);
  const [updateUser, setUpdateUser] = useState({
    username: '',
    photo: '',
  });
  const [modalVisible, setModalVisible] = useState(false);

  // const handleSelectPhoto = () => {
  //   let options = {
  //     mediaType: 'photo',
  //     maxHeight: 2000,
  //     maxWidth: 2000,
  //     storageOptions: {
  //       path: 'photo',
  //     },
  //   };

  //   launchImageLibrary(options, res => {
  //     if (res.didCancel) {
  //       console.log('Cancelled Image Picker');
  //       return;
  //     }
  //     const result = res.assets[0];
  //     console.log(result);
  //     setPhoto(result);
  //   });
  // };

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo',
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('Cancelled Image Picker');
        return;
      }
      const result = res.assets[0];
      console.log(result);
      setPhoto(result);
    });
  };

  const handleSelectPhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      if (res.didCancel) {
        console.log('Cancelled Image Picker');
        console.log(res.assets[0]);
      }
      setUpdateUser({
        ...updateUser,
        photo: res.assets[0],
      });
    });
  };

  const handleUpdateUser = async userId => {
    try {
      const token = await AsyncStorage.getItem('token');
      const form = new FormData();
      form.append('username', updateUser.username);
      if (updateUser.photo.uri) {
        form.append('photo', {
          uri: updateUser.photo.uri,
          name: updateUser.photo.fileName,
          fileName: updateUser.photo.fileName,
          type: updateUser.photo.type,
        });
      }
      const response = await axios.put(`${API_KEY}/user/${userId}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('RESPONSE EDIT USER = ', response);
      Alert.alert('Update User Successful!', 'Update User Successful!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } catch (error) {
      console.log(error.message);
      Alert.alert('Update User Failed!', 'Update User Failed', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../../../../assets/group50.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.wrapperChange}>
        <TouchableOpacity onPress={handleSelectPhoto}>
          <Text style={styles.txt1}>Change Profile Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.txt2}>Change Username</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn1} onPress={handleSelectPhoto}>
        <View>
          <Text style={styles.txt}>Photo Library</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={handleTakePhoto}>
        <View>
          <Text style={styles.txt}>Take Photo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn3} onPress={() => handleUpdateUser()}>
        <View>
          <Text style={styles.txt}>Save</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn4}
        onPress={() => navigation.navigate('ProfilePage')}>
        <View>
          <Text style={styles.txt}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.wrapperModal}>
            <View style={styles.wrapperTitle2}>
              <Text style={styles.title1}>Update Your Recipe</Text>
            </View>
            <View>
              <TextInput
                style={styles.inputBtn}
                placeholder="Username"
                value={updateUser.username}
                onChangeText={value =>
                  setUpdateUser(prevUser => ({
                    ...prevUser,
                    username: value,
                  }))
                }
              />
              <View style={styles.wrapperbtn}>
                <TouchableHighlight
                  style={styles.btn}
                  onPress={() => handleUpdateUser(updateUser.user_id)}>
                  <View>
                    <Text style={styles.txt}>UPDATE</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </>
    </SafeAreaView>
  );
};

export default EditPage;

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
  wrapperChange: {
    marginBottom: 220,
  },
  txt1: {
    color: '#3F3A3A',
    fontSize: 16,
    marginTop: 30,
  },
  txt2: {
    color: '#3F3A3A',
    fontSize: 16,
    marginTop: 25,
  },
  btn1: {
    backgroundColor: '#E7E7E7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  btn2: {
    backgroundColor: '#E7E7E7',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn3: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  btn4: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  txt: {
    color: '#3F3A3A',
    fontSize: 16,
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
});

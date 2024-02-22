import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Link} from 'native-base';

const EditPage = ({navigation}) => {
  const [photo, setPhoto] = useState(null);

  const handleSelectPhoto = () => {
    const options = {
      mediaType: 'photo',
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('Cancelled Image Picker');
        return;
      }
      const result = res.assets[0];
      console.log(result);
      setPhoto(result);
    });
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Image source={require('./../../../../assets/group50.png')} />
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.wrapperChange}>
        <Text style={styles.txt1}>Change Profile Picture</Text>
        <Text style={styles.txt2}>Change Password</Text>
      </View>
      <TouchableHighlight style={styles.btn1} onPress={handleSelectPhoto}>
        <View>
          <Text style={styles.txt}>Photo Library</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btn2} onPress={handleTakePhoto}>
        <View>
          <Text style={styles.txt}>Take Photo</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.btn3}
        onPress={() => navigation.navigate('ProfilePage')}>
        <View>
          <Text style={styles.txt}>Cancel</Text>
        </View>
      </TouchableHighlight>
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
    marginBottom: 350,
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
  txt: {
    color: '#3F3A3A',
    fontSize: 16,
  },
});

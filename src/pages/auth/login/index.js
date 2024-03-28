import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {Link} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_KEY} from '@env';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_KEY}/login`, {
        email,
        password,
      });
      console.log('RESPONSE = ', response);
      // response.data.rows;
      const result = response.data.token;
      // console.log('RESULT = ', result);
      const userId = response.data.data.rows[0].user_id;
      // console.log('USER ID = ', userId);
      // await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('token', result);
      await AsyncStorage.setItem('user_id', userId.toString());
      const user = await AsyncStorage.getItem('user_id');
      console.log('LOCAL STORAGE USER ID = ', user);
      const token = await AsyncStorage.getItem('token');
      console.log('TOKEN = ', token);
      Alert.alert('Login Successful!', 'Login Successful!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      navigation.navigate('MyTabs');
    } catch (error) {
      console.log('ERROR = ', error);
      Alert.alert('Login Failed!', 'Login Failed!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  // console.log(handleLogin);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title1}>Welcome !</Text>
        <Text style={styles.title2}>Log in to your exiting account.</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputBtn}
          placeholder="examplexxx@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputBtn}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.wrapperForgot}>
        <Text style={styles.forgot}>Forgot Password ?</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <View>
          <Text style={styles.txt}>LOG IN</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.wrapperEnd}>
        <Link to={{screen: 'Register'}}>
          <Text style={styles.txt2}>
            Don’t have an account? <Text style={styles.txt3}>Sign Up</Text>{' '}
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  wrapperTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 50,
  },
  title1: {
    color: '#EFC81A',
    fontSize: 20,
  },
  title2: {
    color: '#999999',
    fontSize: 12,
    marginTop: 7,
  },
  inputBtn: {
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    width: '100%',
    height: 60,
    marginBottom: 15,
    paddingLeft: 20,
  },
  wrapperForgot: {
    alignItems: 'flex-end',
  },
  forgot: {
    fontSize: 14,
    color: '#999999',
  },
  btn: {
    backgroundColor: '#EFC81A',
    borderRadius: 10,
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
  },
  txt2: {
    color: '#999999',
    fontSize: 14,
  },
  txt3: {
    color: '#EFC81A',
    fontSize: 14,
  },
  wrapperEnd: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});

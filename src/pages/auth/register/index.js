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
import {API_KEY} from '@env';
import {
  IcUserBlack,
  IcMail,
  IcPhone,
  IcLock,
  IcUnlock,
} from '../../../assets/icons';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_KEY}/register`, {
        username,
        email,
        phonenumber,
        password,
        confPassword,
      });
      console.log(response);
      const result = response.data;
      console.log(result);
      Alert.alert('Register Successful!', 'Register Successful!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      Alert.alert('Register Failed!', 'Register Failed!', [
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
        <Text style={styles.title1}>Let’s Get Started !</Text>
        <Text style={styles.title2}>
          Create new account to access all feautures
        </Text>
      </View>
      <View>
        <View>
          {/* <IcUserBlack /> */}
          <TextInput
            style={styles.inputBtn}
            placeholder="Name"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <TextInput
          style={styles.inputBtn}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputBtn}
          placeholder="Phone Number"
          value={phonenumber}
          onChangeText={setPhonenumber}
        />
        <TextInput
          style={styles.inputBtn}
          placeholder="Create New Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputBtn}
          placeholder="New Password"
          value={confPassword}
          onChangeText={setConfPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <View>
          <Text style={styles.txt}>CREATE</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.wrapperEnd}>
        <Link to={{screen: 'Login'}}>
          <Text style={styles.txt2}>
            Already have account? <Text style={styles.txt3}>Log in Here</Text>{' '}
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  wrapperTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title1: {
    color: '#EFC81A',
    fontSize: 26,
  },
  title2: {
    color: '#999999',
    fontSize: 14,
    marginTop: 7,
  },
  inputBtn: {
    backgroundColor: '#fff',
    borderRadius: 9,
    width: '100%',
    height: 60,
    marginBottom: 15,
    paddingLeft: 20,
  },
  btn: {
    backgroundColor: '#EFC81A',
    borderRadius: 9,
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

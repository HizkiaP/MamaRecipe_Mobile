import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Link} from '@react-navigation/native';
import {IcAward, IcBookmark, IcUser, IcThumb} from './../../../../assets/icons';

const ProfilePage = ({navigation}) => {
  const [token, setToken] = useState('');

  const handleToken = async () => {
    await AsyncStorage.getItem('token');
    setToken(token);
  };

  useEffect(() => {
    handleToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <View>
    //   <Text style={styles.token}>{token}</Text>
    //   <View>
    //     <Text>Profile Page</Text>
    //   </View>
    // </View>
    <SafeAreaView>
      <ImageBackground style={styles.background}>
        <Image source={require('./../../../../assets/ellipse50.png')} />
        <Text style={styles.txt1}>Mareta Lopeda</Text>
      </ImageBackground>
      <View style={styles.box}>
        <View style={styles.wrapperText}>
          <View style={styles.text}>
            <View style={styles.wrapperIcon}>
              <IcUser />
              <Text style={styles.txt2}>Edit Profile</Text>
            </View>
            <Link to={{screen: 'EditPage'}}>
              <Image source={require('./../../../../assets/ic-chevron.png')} />
            </Link>
          </View>
          <View style={styles.text}>
            <View style={styles.wrapperIcon}>
              <IcAward />
              <Text style={styles.txt2}>My Recipe</Text>
            </View>
            <Link to={{screen: 'MyRecipe'}}>
              <Image source={require('./../../../../assets/ic-chevron.png')} />
            </Link>
          </View>
          <View style={styles.text}>
            <View style={styles.wrapperIcon}>
              <IcBookmark />
              <Text style={styles.txt2}>Saved Recipe</Text>
            </View>
            <Link to={{screen: 'SavedRecipe'}}>
              <Image source={require('./../../../../assets/ic-chevron.png')} />
            </Link>
          </View>
          <View style={styles.text}>
            <View style={styles.wrapperIcon}>
              <IcThumb />
              <Text style={styles.txt2}>Liked Recipe</Text>
            </View>
            <Link to={{screen: 'LikedRecipe'}}>
              <Image source={require('./../../../../assets/ic-chevron.png')} />
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  token: {
    color: '#000',
  },
  background: {
    backgroundColor: '#EEC302',
    justifyContent: 'center',
    alignItems: 'center',
    height: 308,
  },
  txt1: {
    color: '#FFFFFF',
    paddingTop: 20,
    fontSize: 18,
  },
  box: {
    marginLeft: 10,
    marginRight: 10,
    height: 512,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapperText: {
    marginLeft: 25,
    marginRight: 25,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  wrapperIcon: {
    flexDirection: 'row',
    gap: 20,
  },
  txt2: {
    color: '#000',
    fontSize: 16,
    marginBottom: 15,
  },
});

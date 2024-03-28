import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfilePage from '../pages/main/profile/profilePage';
import Upload from '../pages/main/uploadRecipe';
import {StyleSheet} from 'react-native';
import Login from '../pages/auth/login';
import Home from '../pages/main/home';
import MyTabBar from '../components/myTabBar';
import Register from '../pages/auth/register';
import MyRecipe from '../pages/main/profile/myRecipe';
import SavedRecipe from '../pages/main/profile/savedRecipe';
import LikedRecipe from '../pages/main/profile/likedRecipe';
import DetailMenu from '../pages/main/detailMenu';
import EditPage from '../pages/main/profile/edit';
// import {IcHome, IcPlus, IcMessage, IcUserBlack} from './../assets/icons/index';
import DetailIngredients from '../pages/main/detailIngredients';
import Search from '../pages/main/search';
import DetailVideo from '../pages/main/detailVideo';

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    // eslint-disable-next-line prettier/prettier, react/no-unstable-nested-components
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // tabBarIcon: ({color, size}) => <IcHome color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen
        name="Chat"
        component={Register}
        options={{headerShown: false}}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const MainRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailIngredients"
          component={DetailIngredients}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailVideo"
          component={DetailVideo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditPage"
          component={EditPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailMenu"
          component={DetailMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LikedRecipe"
          component={LikedRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SavedRecipe"
          component={SavedRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyRecipe"
          component={MyRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;

const styles = StyleSheet.create({});

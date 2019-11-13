import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Movies from './MoviesAPI';
import Image from './BananaImage';
import Flex from './FlexBasics';
import AboutUs from './AboutUs';

const AppNavigator = createStackNavigator({
       Login:Login,
       Movies:Movies,
       Image: Image,
       Flag: Flex,
       AboutUs: AboutUs
  },
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);

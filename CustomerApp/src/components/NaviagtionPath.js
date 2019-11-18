import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Movies from './MoviesAPI';
import Profile from './Profile';
import Albums from './Albums';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer'
import Photos from './Photos';

import Dashboard from './Dashboard';

const AppNavigator = createStackNavigator({
      Login:Login,
      Movies:Movies,
      Dashboard:Dashboard,
      Profile: Profile,
      Albums:Albums,
      AddCustomer:AddCustomer,
      EditCustomer:EditCustomer,
      Photos:Photos,
  },
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);

//  @flow

import React from 'react';
import { Icon } from 'react-native-elements';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { GC_AUTH_TOKEN } from '../../utils/constants';

const logout = navigate => {
  AsyncStorage.removeItem(GC_AUTH_TOKEN);
  navigate('Auth');
};

const Logout = ({ navigation }) => (
  <TouchableOpacity onPress={() => logout(navigation.navigate)}>
    <Icon name="sign-out" type="font-awesome" color="white" />
  </TouchableOpacity>
);

export default withNavigation(Logout);

//  @flow

import * as React from 'react';
import { AsyncStorage } from 'react-native';

import Loading from '../common/Loading';
import { GC_AUTH_TOKEN } from '../../utils/constants';

class InitialLoad extends React.PureComponent<*> {
  async componentDidMount() {
    const token = await AsyncStorage.getItem(GC_AUTH_TOKEN);
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  }

  render() {
    return <Loading />;
  }
}

export default InitialLoad;

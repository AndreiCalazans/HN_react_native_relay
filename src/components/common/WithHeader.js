// @flow
import * as React from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native';

import Logout from '../Auth/Logout';

const WithHeader = (canLogout: boolean) => (WrappedComponent: any) =>
  class extends React.Component<*> {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Header
            backgroundColor="#fe6501"
            centerComponent={{
              text: 'HACKER NEWS',
              style: { color: 'white', fontWeight: 'bold' },
            }}
            rightComponent={canLogout ? <Logout /> : null}
          />
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  };

export default WithHeader;

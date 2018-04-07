//  @flow

import { StackNavigator, SwitchNavigator } from 'react-navigation';

import { ROUTE_NAMES } from './utils/constants';

import LinkList from './components/Links/LinkList';
import Login from './components/Auth/Login';
import InitialLoad from './components/Auth/InitialLoad';

const navigationOptions = (withGesture: boolean = true) => ({
  navigationOptions: { header: null, gesturesEnabled: withGesture },
});

const Routes = {
  [ROUTE_NAMES.LINK_LIST]: {
    screen: LinkList,
    ...navigationOptions(),
  },
};

const App = StackNavigator(Routes);

const AuthRoutes = {
  [ROUTE_NAMES.LOGIN]: {
    screen: Login,
    ...navigationOptions(),
  },
};

const Auth = StackNavigator(AuthRoutes);

export default SwitchNavigator(
  {
    AuthLoading: InitialLoad,
    App,
    Auth,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

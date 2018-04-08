import * as React from 'react';
import PropTypes from 'prop-types';

export const DumbComponent = () => 'Dumb_Component';

const navigation = { navigate: jest.fn() };
export const WithNavigation = Component =>
  class NavigationContext extends React.Component {
    getChildContext() {
      return { navigation };
    }
    static childContextTypes = {
      navigation: PropTypes.shape({
        navigate: PropTypes.func,
      }),
    };

    render() {
      return <Component {...this.props} />;
    }
  };

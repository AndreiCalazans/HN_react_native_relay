import { ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import createQueryRenderer from '../../src/utils/createQueryRenderer';

import { DumbComponent } from '../../TestUtils';

let mockReturn = {
  error: null,
  props: null,
};

jest.mock('react-relay', () => {
  const RealModule = require.requireActual('react-relay');

  return {
    ...RealModule,
    QueryRenderer: ({ render }) => render(mockReturn),
  };
});

describe('createQueryRenderer', () => {
  const Component = createQueryRenderer(DumbComponent, DumbComponent, {
    query: `
      query TestQuery {
        me {
          name
        }
      }
    `,
  });

  it('renders loading screen', () => {
    const renderer = TestRenderer.create(<Component />);
    const rendered = renderer.root;
    const loading = rendered.findByType(ActivityIndicator);

    expect(loading.type).toEqual(ActivityIndicator);
  });

  it('should render component with props', () => {
    const values = {
      error: null,
      props: {
        viewer: {
          name: 'test',
        },
      },
    };
    mockReturn = values;
    const renderer = TestRenderer.create(<Component />);
    const component = renderer.root.findByType(DumbComponent);
    expect(component.props.viewer).toEqual(values.props.viewer);
  });

  it('should display error', () => {
    const values = {
      error: 'Some error',
      props: null,
    };
    mockReturn = values;
    const renderer = TestRenderer.create(<Component />);
    const component = renderer.root.findByType(Text);
    expect(component.props.children).toEqual('Some error');
  });

  it('should call query params', () => {
    const mockParams = jest.fn(() => {});
    const Component = createQueryRenderer(DumbComponent, DumbComponent, {
      query: `
        query TestQuery {
          me {
            name
          }
        }
      `,
      queriesParams: mockParams,
    });

    const values = {
      error: null,
      props: {
        viewer: {
          name: 'test',
        },
      },
    };
    mockReturn = values;
    const renderer = TestRenderer.create(<Component />);
    const component = renderer.root.findByType(DumbComponent);
    expect(component.props.viewer).toEqual(values.props.viewer);
    expect(mockParams).toHaveBeenCalledWith({});
  });
});

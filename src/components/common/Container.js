//  @flow

import * as React from 'react';
import { View } from 'react-native';

type Align = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
type Direction = 'row' | 'column';

type Props = {
  children: React.Node,
  justify: Justify,
  align: Align,
  direction: Direction,
  flex?: number,
  style?: {},
};

const Container = ({
  children,
  style,
  flex,
  direction,
  align,
  justify,
}: Props) => (
  <View style={[styles.view(justify, align, direction, flex), style]}>
    {children}
  </View>
);

Container.defaultProps = {
  justify: 'center',
  align: 'center',
  direction: 'column',
};

const getFlex = flex => (flex ? { flex } : {});

const styles = {
  view: (justify, align, direction, flex) => ({
    ...getFlex(flex),
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
  }),
};
export default Container;

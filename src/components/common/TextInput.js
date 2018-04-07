//  @flow

import * as React from 'react';
import { Input, Icon } from 'react-native-elements';

type Props = {
  value: string,
  onChange: string => any,
  placeholder: string,
  iconName?: string,
  style?: any,
};

const TextInput = ({
  value,
  onChange,
  placeholder,
  iconName,
  style,
  ...props
}: Props) => (
  <Input
    autoCorrect={false}
    autoCapitalize="none"
    value={value}
    onChangeText={onChange}
    containerStyle={style || {}}
    placeholder={placeholder}
    leftIcon={
      iconName && (
        <Icon name={iconName} size={24} type="font-awesome" color="black" />
      )
    }
    {...props}
  />
);

export default TextInput;

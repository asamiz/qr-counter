import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../../types';
import styles from './styles';

function Button({
  title,
  onPress,
  containerStyle,
  textStyle,
  testID = 'app-btn',
}: IButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]} testID={'app-btn-text'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export {Button};

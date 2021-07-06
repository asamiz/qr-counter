import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../../types';
import styles from './styles';

function Button({title, onPress, containerStyle, textStyle}: IButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

export {Button};

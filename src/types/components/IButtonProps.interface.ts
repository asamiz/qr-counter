import {ViewStyle, TextStyle} from 'react-native';
export interface IButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
}

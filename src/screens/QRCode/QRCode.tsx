import React, {createRef} from 'react';
import {View, Linking, Alert} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {urlChecker} from '../../utils';
import styles from './styles';

function QRCode() {
  const cameraRef = createRef<QRCodeScanner>();
  function onSuccess(e: BarCodeReadEvent): void {
    if (e.data && urlChecker(e.data)) {
      Linking.openURL(e.data).then(isOpened => {
        if (isOpened) {
          // To solve re activation when the back coming back from background
          setTimeout(() => {
            cameraRef.current && cameraRef.current.reactivate();
          }, 2500);
        }
      });
    } else {
      Alert.alert(
        'Something went wrong',
        "The app couldn't open the URL, please make sure that your QR code has a valid URL",
        [
          {
            text: 'Rescan',
            onPress: () => {
              setTimeout(() => {
                cameraRef.current && cameraRef.current.reactivate();
              }, 2500);
            },
          },
        ],
      );
    }
  }

  return (
    <View style={styles.container} testID={'qr-container'}>
      <QRCodeScanner
        ref={cameraRef}
        onRead={onSuccess}
        fadeIn={false}
        showMarker={true}
        cameraStyle={styles.camera}
      />
    </View>
  );
}

export default QRCode;

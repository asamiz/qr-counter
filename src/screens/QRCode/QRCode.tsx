import React from 'react';
import {View, Linking, Alert} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';

function QRCode() {
  const cameraRef = React.createRef<any>();
  function onSuccess(e: BarCodeReadEvent): void {
    Linking.openURL(e.data).catch(err => {
      // To handle if the user scans a wrong URL value, and re-activate the camera again.
      if (err) {
        Alert.alert(
          'Something went wrong',
          "The app couldn't open the URL, please make sure that your QR code has a valid URL",
          [
            {
              text: 'Ok',
              onPress: () => {
                setTimeout(() => {
                  cameraRef.current && cameraRef.current.reactivate();
                }, 2500);
              },
            },
          ],
        );
      }
    });
  }

  return (
    <View style={styles.container} testID={'qr-container'}>
      <QRCodeScanner
        ref={cameraRef}
        onRead={onSuccess}
        showMarker={true}
        cameraStyle={styles.camera}
      />
    </View>
  );
}

export default QRCode;

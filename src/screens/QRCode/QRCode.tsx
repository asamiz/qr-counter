import React from 'react';
import {View, Linking, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';

function QRCode() {
  function onSuccess(e: any): void {
    Linking.openURL(e.data).catch(err => {
      if (err) {
        Alert.alert(
          'Something went wrong',
          "The app couldn't open the URL, please make sure that your QR code has a valid URL",
        );
      }
    });
  }

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        cameraStyle={styles.camera}
        reactivate={true}
        reactivateTimeout={3000}
      />
    </View>
  );
}

export default QRCode;

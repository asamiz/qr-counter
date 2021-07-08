import React from 'react';
import {View, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';

function QRCode() {
  function onSuccess(e: any): void {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  }

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        cameraStyle={styles.camera}
      />
    </View>
  );
}

export default QRCode;

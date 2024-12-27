import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // To generate QR codes

const ReceivePaymentScreen: React.FC = () => {
  const walletAddress = 'BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Receive Payment</Text>
      <QRCode value={walletAddress} size={200} />
      <TouchableOpacity onPress={() => alert('Payment received!')}>
        <Text style={{ marginTop: 20, color: 'blue' }}>Scan the QR Code to Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceivePaymentScreen;

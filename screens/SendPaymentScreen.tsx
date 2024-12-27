import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Ionicons } from 'react-native-vector-icons';
import { colors, globalStyles } from '../styles';
import { getBalance, sendSol } from '../solanaWeb3';
import { createPaymentUrl } from '../barkPay';

const SendPaymentScreen: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [wallet, setWallet] = useState(null);

  const handleSendPayment = async () => {
    if (!amount || !address) {
      Alert.alert('Error', 'Please provide an amount and recipient address.');
      return;
    }

    setLoading(true);
    try {
      // Send payment logic using Solana Web3
      const signature = await sendSol(wallet, address, parseFloat(amount));
      Alert.alert('Payment Sent', `Payment successful with signature: ${signature}`);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while sending payment.');
    } finally {
      setLoading(false);
    }
  };

  const handleScan = (e: any) => {
    setAddress(e.data); // Set address from scanned QR code
    setScanning(false);
  };

  const generateQrCode = () => {
    if (!address || !amount) return null;
    return <QRCode value={createPaymentUrl(address, parseFloat(amount))} size={200} />;
  };

  const fetchBalance = async () => {
    if (wallet?.publicKey) {
      const currentBalance = await getBalance(wallet.publicKey.toBase58());
      setBalance(currentBalance);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>BarkPay</Text>
      <Text style={globalStyles.subHeader}>Send Payment</Text>

      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Recipient Address"
        style={globalStyles.input}
      />
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
        keyboardType="numeric"
        style={globalStyles.input}
      />

      <Text style={globalStyles.smallText}>Balance: {balance} SOL</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleSendPayment}
        disabled={loading}
      >
        <Text style={{ color: colors.white }}>
          {loading ? 'Sending...' : 'Send Payment'}
        </Text>
      </TouchableOpacity>

      {generateQrCode()}

      <TouchableOpacity
        style={[globalStyles.button, { marginTop: 20 }]}
        onPress={() => setScanning(true)}
      >
        <Ionicons name="scan" size={20} color={colors.white} />
        <Text style={{ color: colors.white, marginLeft: 10 }}>Scan to Pay</Text>
      </TouchableOpacity>

      {scanning && (
        <QRCodeScanner onRead={handleScan} topContent={<Text>Scan QR Code to Receive Payment</Text>} />
      )}
    </View>
  );
};

export default SendPaymentScreen;

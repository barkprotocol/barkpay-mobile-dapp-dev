import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to BarkPay</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SendPayment')}>
        <Text style={{ marginTop: 20, color: 'blue' }}>Go to Send Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SendPaymentScreen from '../screens/SendPaymentScreen';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SendPayment" component={SendPaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

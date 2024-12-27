import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../styles/colors';

const SettingsScreen: React.FC = () => {
  // Placeholder function for logging out
  const handleLogout = () => {
    // Logic to log out the user, such as clearing authentication tokens
    alert('Logged out');
  };

  // Placeholder function for changing user settings
  const handleChangeSetting = (setting: string) => {
    alert(`Changed setting: ${setting}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Change Password Section */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleChangeSetting('Password')}
      >
        <Ionicons name="lock-closed-outline" size={24} color={colors.black} style={styles.icon} />
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      {/* Change Email Section */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleChangeSetting('Email')}
      >
        <Ionicons name="mail-outline" size={24} color={colors.black} style={styles.icon} />
        <Text style={styles.optionText}>Change Email</Text>
      </TouchableOpacity>

      {/* Change Display Name Section */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleChangeSetting('Display Name')}
      >
        <Ionicons name="person-outline" size={24} color={colors.black} style={styles.icon} />
        <Text style={styles.optionText}>Change Display Name</Text>
      </TouchableOpacity>

      {/* Wallet Management Section */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleChangeSetting('Wallet')}
      >
        <Ionicons name="wallet-outline" size={24} color={colors.black} style={styles.icon} />
        <Text style={styles.optionText}>Manage Wallet</Text>
      </TouchableOpacity>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles for SettingsScreen
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Light',  // Custom font for titles
    color: colors.black,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  optionText: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',  // Custom font for option text
    color: colors.black,
    marginLeft: 16,
  },
  icon: {
    marginLeft: 5,
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: colors.red,  // Red background for the logout button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'Inter-SemiBold',
  },
});

export default SettingsScreen;

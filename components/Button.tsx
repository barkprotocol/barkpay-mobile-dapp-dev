import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../styles/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: string; // Optional: icon for button
  iconPosition?: 'left' | 'right'; // Optional: control the icon's position
  backgroundColor?: string; // Custom background color
  textColor?: string; // Custom text color
  disabled?: boolean; // Disable button
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  icon,
  iconPosition = 'left',
  backgroundColor = colors.primary,
  textColor = colors.white,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.lightGray : backgroundColor },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.innerButton}>
        {icon && iconPosition === 'left' && (
          <Ionicons name={icon} size={20} color={textColor} style={styles.icon} />
        )}
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        {icon && iconPosition === 'right' && (
          <Ionicons name={icon} size={20} color={textColor} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  innerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default Button;

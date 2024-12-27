import { StyleSheet } from 'react-native';
import { colors } from './styles/colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subHeader: {
    fontSize: 20,
    color: colors.secondary,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: colors.buttonBackground,
    padding: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  smallText: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 10,
  },
});

// styles.ts

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#333333',
  lightGray: '#D3D3D3',
  sand: '#F4E1C1',
};

export const typography = {
  barkLightFont: 'BarkLight',
  interSemibold: 'Inter-SemiBold',
  interLight: 'Inter-Light',
};

export const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontFamily: typography.barkLightFont,
    color: colors.black,
  },
  subHeader: {
    fontSize: 24,
    fontFamily: typography.interSemibold,
    color: colors.darkGray,
  },
  input: {
    height: 40,
    borderColor: colors.lightGray,
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: colors.black,
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
    fontFamily: typography.interSemibold,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  qrCodeText: {
    fontFamily: typography.interLight,
    fontSize: 16,
    color: colors.darkGray,
    marginTop: 10,
  },
};

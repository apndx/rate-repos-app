import { Platform } from 'react-native';

const platformFont =  Platform.select({
  android: 'Roboto',
  ios: 'Arial',
  default: 'System',
});

const theme = {
  colors: {
    mainBackGround: '#e1e4e8',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    white: 'white',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20
  },
  fonts: {
    main: platformFont
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  padding: {
    basic: 20,
    small: 10
  },
  logo: {
    width: 60,
    height: 60,
  },
  button: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
  },
  margins: {
    marginXs: 5
  },
  border: {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid'
  }
};

export default theme;

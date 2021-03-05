import { Platform } from 'react-native';

import colors from './colors';

const styles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};

export default styles;

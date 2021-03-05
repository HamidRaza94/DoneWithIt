import { DefaultTheme } from '@react-navigation/native';

import { defaultStyles } from '../config';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyles.colors.primary,
    background: defaultStyles.colors.white,
  },
}

export default navigationTheme;

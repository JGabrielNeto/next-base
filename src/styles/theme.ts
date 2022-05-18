import { extendTheme } from '@chakra-ui/react';
import projectConfig from '../../package.json';

export const theme = extendTheme({
  config: {
    cssVarPrefix: projectConfig.name,
  },
  fonts: {
    heading: 'Barlow, sans-serif',
    body: 'Barlow, sans-serif',
  },
  colors: {
    black: {
      650: '#242424',
    },
    orange: {
      650: '#EBAA00',
    },
  },
});

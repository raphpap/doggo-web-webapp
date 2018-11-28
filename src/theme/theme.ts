// Type
import {Theme} from './types';

// Default theme
export const theme: Theme = {
  breakpoints: {
    medium: 480
  },
  colors: {
    error: '#c00',
    grey: {
      grey10: '#eee',
      grey20: '#888',
      grey30: '#414a4c',
      grey40: '#3b444b',
      grey50: '#353839',
      grey60: '#171820',
      grey70: '#0e1111'
    },
    white: {
      plain: '#fff',
      transparent: 'rgba(255, 255, 255, 0.7)'
    }
  },
  margin: {
    unit: 8
  },
  padding: {
    unit: 8
  }
};

export default theme;

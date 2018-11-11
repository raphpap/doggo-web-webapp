// Interfaces
export interface ThemeContext {
  theme: Theme;
}

export interface Theme {
  colors: {
    error: string;
    grey: {
      grey10: string;
      grey20: string;
      grey30: string;
      grey40: string;
      grey50: string;
      grey60: string;
      grey70: string;
    };
    white: {
      plain: string;
      transparent: string;
    };
  };
  margin: {
    unit: number;
  };
  padding: {
    unit: number;
  };
}

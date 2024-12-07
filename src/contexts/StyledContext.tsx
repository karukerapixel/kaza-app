import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#ff6060',
    secondary: '#182026',
    tertiary: '#b9b9b9',
    white: 'white',
  },
};

interface StyledProviderProps {
  children: ReactNode;
}

const StyledProvider: React.FC<StyledProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyledProvider;

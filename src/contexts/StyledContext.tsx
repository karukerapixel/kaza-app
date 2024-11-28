import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#222222',
    lightgrey: '#f7f7f7',
    primary: '#ff6060',
    white: '#fff',
  },
};

interface StyledProviderProps {
  children: ReactNode;
}

const StyledProvider: React.FC<StyledProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyledProvider;

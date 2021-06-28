import React from 'react';
import BaseLayout from './src/components/BaseLayout';
import { DarkModeProvider } from './src/hooks/useDarkMode';

import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <BaseLayout>{element}</BaseLayout>{' '}
  </DarkModeProvider>
);

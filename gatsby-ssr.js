import React from 'react';

import BaseLayout from './src/components/BaseLayout';
import { DarkModeProvider } from './src/hooks/useDarkMode';

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
);

export const wrapPageElement = ({ element }) => (
  <BaseLayout>{element}</BaseLayout>
);

import React, { useEffect, useState, useContext } from 'react';

const LOCAL_STORAGE_KEY = 'color-theme';

const DarkModeContext = React.createContext();

function getInitialTheme() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const colorTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (typeof colorTheme === 'string') {
      return colorTheme;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
}

function getOtherTheme(theme) {
  return theme === 'light' ? 'dark' : 'light';
}

export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => getOtherTheme(currentTheme));
  };

  useEffect(() => {
    const doc = window.document.documentElement;
    doc.classList.remove(getOtherTheme(theme));
    doc.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  const value = { theme, toggleTheme };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  return context;
}

export default useDarkMode;

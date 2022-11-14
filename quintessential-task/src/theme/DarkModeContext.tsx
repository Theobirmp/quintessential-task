import { createContext, useState } from 'react';
import ChildrenPropsType from '../types/ChildrenPropsType';
import darkModeContextType from '../types/DarkModeContextType';

export const DarkModeContext = createContext<darkModeContextType | null>(null);

export const DarkModeProvider = ({ children }: ChildrenPropsType) => {
  const [darkMode, setDarkMode] = useState('light');
  const toggleDarkMode = () => {
    darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light');
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

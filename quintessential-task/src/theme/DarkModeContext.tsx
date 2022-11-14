import { createContext, Dispatch, SetStateAction, useState } from 'react';
import ChildrenPropsType from '../types/ChildrenPropsType';
type darkModeContextType = {
  darkMode: string;
  setDarkMode: Dispatch<SetStateAction<string>>;
  toggleDarkMode: () => void;
};

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

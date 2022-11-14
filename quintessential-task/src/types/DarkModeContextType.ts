import { Dispatch, SetStateAction } from 'react';

type darkModeContextType = {
  darkMode: string;
  setDarkMode: Dispatch<SetStateAction<string>>;
  toggleDarkMode: () => void;
};
export default darkModeContextType;

import { useDarkMode } from '../hooks/useDarkMode';
import ChildrenPropsType from '../types/ChildrenPropsType';
import ToggleDarkThemeSwitch from './ToggleDarkThemeSwitch';

const AppContainer = ({ children }: ChildrenPropsType) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode} min-h-screen w-[100%] bg-white dark:bg-red-800  relative`}
    >
      {children}
    </div>
  );
};

export default AppContainer;

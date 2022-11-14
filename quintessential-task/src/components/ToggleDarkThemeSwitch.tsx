import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../hooks/useDarkMode';

const ToggleDarkThemeSwitch = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <span className="absolute z right-6 top-[25px] z-10">
      <button onClick={toggleDarkMode}>
        {darkMode === 'dark' ? (
          <BsFillSunFill
            color={darkMode === 'dark' ? 'white' : 'black'}
            size={30}
          />
        ) : (
          <BsFillMoonFill size={30} />
        )}
      </button>
    </span>
  );
};

export default ToggleDarkThemeSwitch;

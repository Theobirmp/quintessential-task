import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../hooks/useDarkMode';
import { motion } from 'framer-motion';

const ToggleDarkThemeSwitch = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <motion.span
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      className="absolute z right-6 top-[25px] z-10"
    >
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
    </motion.span>
  );
};

export default ToggleDarkThemeSwitch;

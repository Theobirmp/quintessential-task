import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
const Topbar = () => {
  let pageHeader;
  const location = useLocation();
  console.log(location);
  switch (location.pathname) {
    case '/warehouse1':
      pageHeader = 'Αποθήκη 1';
      break;
    case '/warehouse2':
      pageHeader = 'Αποθήκη 2';
      break;
    case '/warehouse3':
      pageHeader = 'Αποθήκη 3';
      break;
    case '/warehouse4':
      pageHeader = 'Αποθήκη 4';
      break;
    case '/addItem':
      pageHeader = 'Καταχώριση';
      break;
    case '/home':
      pageHeader = 'Κεντρική Σελίδα';
      break;
    default:
      break;
  }
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div
      className="bg-white dark:bg-bgPageDark transition-[background-color]
     ease-linear duration-200 h-[88px] pl-[30px] px-[70px]
      flex items-center justify-between pt-[14px]
       border-b-2 border-opacity-70  w-[100%]"
    >
      <button
        className="inline-block md:hidden"
        onClick={() => {
          setMobileOpen(true);
        }}
      >
        <GiHamburgerMenu size={30} />
      </button>
      {mobileOpen ? (
        <motion.nav
          initial={{ x: '-100%' }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="absolute inset-0 bg-bgPage dark:bg-bgPageDark z-[900]
         w-[100%] h-[100vh]  text-black dark:text-white text-[20px]"
        >
          <div
            className="relative w-[100%] h-[100%] flex flex-col gap-10
          justify-center items-center"
          >
            <Link onClick={() => setMobileOpen(false)} to="/">
              Κεντρική Σελίδα
            </Link>
            <Link onClick={() => setMobileOpen(false)} to="/warehouse1">
              Αποθήκη 1
            </Link>
            <Link onClick={() => setMobileOpen(false)} to="/warehouse2">
              Αποθήκη 2
            </Link>
            <Link onClick={() => setMobileOpen(false)} to="/warehouse3">
              Αποθήκη 3
            </Link>
            <Link onClick={() => setMobileOpen(false)} to="/warehouse4">
              Αποθήκη 4
            </Link>
            <Link onClick={() => setMobileOpen(false)} to="/addItem">
              Καταχώριση{' '}
            </Link>
            <button
              className="absolute right-[10px] top-[10px]"
              onClick={() => setMobileOpen(false)}
            >
              <AiFillCloseCircle />
            </button>
          </div>
        </motion.nav>
      ) : (
        <></>
      )}
      <header>
        <h2 className="text-[#282121] dark:text-white">{pageHeader}</h2>
      </header>
      <div className="rounded-[8px] flex gap-[22px] p-[10px] border-2 border-opacity-70 max-w-[477px] w-[35%]">
        <img src="./img/searchIcon.png" alt="search" />
        <input
          className="overflow-ellipsis w-[100%] bg-white dark:bg-bgPageDark text-black dark:text-white border-none outline-none"
          type="text"
          placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων"
        />
      </div>
    </div>
  );
};

export default Topbar;

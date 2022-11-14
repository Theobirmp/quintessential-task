import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside className="hidden md:block bg-white dark:bg-bgPageDark transition-[background-color] ease-linear duration-200 min-h-[100vh] max-w-[226px] border-r-2 border-opacity-70">
      <div className="flex flex-col gap-[110px] items-center h-[100%]">
        <div className="flex sm:gap-[10px] lg:gap-[19px] h-[88px] items-end w-[100%] sm:pl-[10px] lg:pl-[21px]">
          {/* <img src="./img/settingsIcon.png" alt="warehouse" /> */}
          <header>
            <Link
              to="/"
              className="text-textBlackish dark:text-white text-[16px] leading-[19px] 
              hover:scale-110 transition-transform duration-150 ease-linear"
            >
              Warehouse <br /> Management
            </Link>
          </header>
        </div>
        <div className="flex flex-col gap-[7px] w-[100%]">
          <div className="flex gap-[7px] mb-[11px] ml-[16px]">
            <img src="./img/menuIcon.png" alt="menu header" />
            <header>
              <h4 className="text-[10px] leading-[12px] uppercase dark:text-white">
                μενου επιλογων
              </h4>
            </header>
          </div>
          <div className="flex flex-col gap-[14px] w-[100%]">
            <div
              className="flex gap-[13px] bg-bgDarkBlue text-white
            py-[12px] pl-[33px] text-[14px] leading-[17px]"
            >
              <img src="./img/houseIcon.png" alt="menu" color="white" />
              <NavLink to="/">Κεντρική Σελίδα</NavLink>
            </div>
            <div className="flex gap-[15px]  items-center pl-[33px]">
              <img src="./img/menuIcon1.png" alt="menu" />
              <NavLink
                to="/warehouse1"
                className={({ isActive }) =>
                  isActive
                    ? `text-bgDarkBlue dark:text-yellow-600 text-[14px] leading-[17px]`
                    : 'flex gap-2 divider items-center text-textWhiteBlur text-[14px] leading-[17px] hover:scale-110 transition-transform duration-150 ease-linear'
                }
              >
                Αποθήκη 1
              </NavLink>
            </div>
            <div className="flex gap-[15px]  items-center pl-[33px]">
              <img src="./img/menuIcon2.png" alt="menu" />
              <NavLink
                to="/warehouse2"
                className={({ isActive }) =>
                  isActive
                    ? `text-bgDarkBlue dark:text-yellow-600 text-[14px] leading-[17px]`
                    : 'flex gap-2 divider items-center text-textWhiteBlur text-[14px] leading-[17px] hover:scale-110 transition-transform duration-150 ease-linear'
                }
              >
                Αποθήκη 2
              </NavLink>
            </div>
            <div className="flex gap-[15px]  items-center pl-[33px]">
              <img src="./img/menuIcon3.png" alt="menu" />
              <NavLink
                to="/warehouse3"
                className={({ isActive }) =>
                  isActive
                    ? `text-bgDarkBlue dark:text-yellow-600 text-[14px] leading-[17px]`
                    : 'flex gap-2 divider items-center text-textWhiteBlur text-[14px] leading-[17px] hover:scale-110 transition-transform duration-150 ease-linear'
                }
              >
                Αποθήκη 3
              </NavLink>
            </div>
            <div className="flex gap-[15px]  items-center pl-[33px]">
              <img src="./img/menuIcon4.png" alt="menu" />
              <NavLink
                to="/warehouse4"
                className={({ isActive }) =>
                  isActive
                    ? `text-bgDarkBlue dark:text-yellow-600 text-[14px] leading-[17px]`
                    : 'flex gap-2 divider items-center text-textWhiteBlur text-[14px] leading-[17px] hover:scale-110 transition-transform duration-150 ease-linear'
                }
              >
                Αποθήκη 4
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[23px]">
          <div className="flex gap-[7px] ml-[17px] mt-[-60px]">
            <img src="./img/menuIcon.png" alt="menu header" />
            <header className="">
              <h4 className=" text-[10px] leading-[12px] uppercase dark:text-white">
                καταχωριση υλικων και κωδικων
              </h4>
            </header>
          </div>
          <div className="flex flex-col gap-[13px] ml-[33px]">
            <div className="flex gap-[15px]">
              <img src="./img/menuIcon5.png" alt="menu" />
              <NavLink
                to="/addItem"
                className={({ isActive }) =>
                  isActive
                    ? `text-bgDarkBlue dark:text-yellow-600 text-[14px] leading-[17px]`
                    : 'flex gap-2 divider items-center text-textWhiteBlur text-[14px] leading-[17px] hover:scale-110 transition-transform duration-150 ease-linear'
                }
              >
                Kαταχώριση
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="place-self-end self-end w-[100%] mt-auto  h-[55px]
         flex items-center gap-[7px] pl-[15px]
        border-opacity-70 border-t-2"
        >
          <img src="./img/settingsIcon.png" alt="settings" />
          <span className="text-[10px] leading-[12px] uppercase dark:text-white">
            Ρυθμισεις
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

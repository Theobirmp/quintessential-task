import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  useValidateEmailLogin,
  useValidatePasswordLogin,
} from '../hooks/useValidateLogin';
import { BiShow } from 'react-icons/bi';
import { motion } from 'framer-motion';
const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleEmailFocus = () => {
    setEmailError(useValidateEmailLogin(email));
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError('');
    setEmail(e.currentTarget.value);
  };
  const handlePasswordFocus = () => {
    setPasswordError(useValidatePasswordLogin(password));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordError('');
    setPassword(e.currentTarget.value);
  };
  const handleFormSubmit = () => {
    const path = '/home';
    navigate(path);
  };
  const showPassword = () => {
    if (passwordRef.current === null) return;
    passwordRef.current.type =
      passwordRef.current.type === 'password' ? 'text' : 'password';
  };
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.75 } }}
      className="bg-white dark:bg-bgPageDark
     transition-[background-color] ease-linear duration-200
      relative min-h-screen w-[100%] grid grid-flow-col
       2xl:items-center 2xl:justify-around  "
    >
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.75 } }}
        className="absolute  inset-0 z-0 md:relative md:max-w-[601px] md:max-h-[768px] lg:max-w-[100vh] lg:max-h-[100vhpx]"
      >
        <img
          className="w-[100%] h-[100%] background-cover"
          src="./img/LoginBg.png"
          alt="login"
        />
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75, delay: 0.8 } }}
        className="relative bg-opacity-70 bg-white md:bg-opacity-100
       w-[100%] flex flex-col items-center pt-[136px]
       text-center md:mr-[180px] p-10
       z-1"
      >
        <header>
          <h3
            className="uppercase text-[36px] text-textBlue leading-[44px]
          mb-[79px]"
          >
            Συνδεση
          </h3>
        </header>
        <form className="flex flex-col gap-[36px]" action="">
          <div className="flex flex-col gap-[13px] md:w-[402px]">
            <label className="text-[16px] leading-[20px]" htmlFor="email">
              Δ/νση ηλεκτρονικού ταχυδρομείου
            </label>
            <input
              autoComplete="no-password"
              value={email}
              onChange={(e) => handleEmailChange(e)}
              onBlur={handleEmailFocus}
              className="border-[#b8b8b8] border-[2px] rounded-[8px] px-[8px]
             py-[16px] text-center text-textBlue hover:border-textBlue
              focus:border-textBlue text-[18px] leading-[22px] tracking-[3%]"
              id="email"
              type="text"
            />
            {emailError !== '' ? (
              <span className="text-error">{emailError}</span>
            ) : (
              <></>
            )}
          </div>
          <div className="relative flex flex-col gap-[13px] md:w-[402px]">
            <label className="text-[16px] leading-[20px]" htmlFor="password">
              Κωδικός Πρόσβασης
            </label>
            <input
              ref={passwordRef}
              autoComplete="no-password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              onBlur={handlePasswordFocus}
              className="border-[#b8b8b8] border-[2px] rounded-[8px] px-[8px]
             py-[16px] text-center text-textBlue hover:border-textBlue
              focus:border-textBlue text-[18px] leading-[22px] tracking-[3%]"
              id="password"
              type="password"
            />
            {passwordError !== '' ? (
              <span className="text-error">{passwordError}</span>
            ) : (
              <></>
            )}
            <span className="absolute right-0">
              <BiShow size={20} onClick={showPassword} />
            </span>
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            disabled={
              emailError === '' &&
              passwordError === '' &&
              password.length >= 4 &&
              email !== '' &&
              password !== ''
                ? false
                : true
            }
            className="disabled:bg-error transition-[background-color] ease-linear duration-200 mt-[30px] bg-bgDarkBlue text-white px-[90px] py-[13px] text-center
          text-[18px] leading-[22px] tracking-[4%] rounded-[8px]"
            onSubmit={() => console.log('submit')}
          >
            Είσοδος
          </button>
          <Link className="mt-[28px]" to="/home">
            Ξέχασα τον κωδικό μου
          </Link>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default Login;

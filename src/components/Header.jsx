/** @format */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Header() {
  const [dark, setDark] = useState(false);

  function setMode() {
    setDark((prevDark) => {
      const newDark = !prevDark;
      if (newDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newDark;
    });
    // console.log(dark);
  }

  return (
    <div className='w-full dark:border-b fixed top-0'>
      <nav className='bg-gradient-to-l from-emerald-400 to-lime-400 w-full md:px-20 py-3 dark:from-slate-800 dark:to-indigo-900 dark:text-white flex items-center justify-between'>
        <NavLink className='text-5xl text-white flex text-blue-500 items-center gap-2 dark:text-rose-600'>
          <FaConnectdevelop />{" "}
          <span className='text-2xl font-medium'>AvoidBook</span>
        </NavLink>
        <button
          onClick={setMode}
          className={`flex gap-4 text-xl py-2 px-3 rounded-3xl border select-none relative dark  dark:bg-sky-900  bg-amber-200`}
        >
          <span className={`rounded-full border w-8 h-8 absolute top-0.5 left-2 ${dark ? 'translate-x-8 bg-rose-800' : 'bg-sky-400'} ease-out duration-500 transition-all`}></span>
          <MdLightMode />
          <MdDarkMode />
        </button>
      </nav>
    </div>
  );
}

export default Header;

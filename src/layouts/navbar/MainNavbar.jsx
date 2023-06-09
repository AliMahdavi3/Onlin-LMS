import React, { useState } from "react";
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
let Links = [
  { name: "فروشگاه", src: "/shop" },
  { name: "خدمات", src: "/" },
  { name: "آموزش", src: "/" },
  { name: "بلاگ", src: "/" },
];
const MainNavbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full z-50 fixed navbar top-0 left-0">
      <div className="md:flex items-center navbar justify-between bg-cyan-900 py-7 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl bg-cyan-900 cursor-pointer flex justify-end gap-1">
          <a href="/" className="text-blue-400 text-2xl font-extrabold">
            LM<span className="navbar_logo text-2xl">system</span>
          </a>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-10 text-2xl cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <FaWindowClose className="text-red-700" />
          ) : (
            <FaAlignJustify className="text-yellow-400" />
          )}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex -mr-7 mt-6 md:mt-0 md:mr-0
           md:items-center md:pb-0 pb-12 absolute md:static
            bg-cyan-900 w-full md:w-auto md:pl-0 transition-all duration-700 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
        >
          {Links.map((link) => (
            <li className="text-center md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.src}
                className="text-white hover:text-blue-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex justify-center">
            <button className="btn w-40 pb-2 rounded-full bg-white hover:bg-slate-400 text-black md:ml-8 font-semibold px-3 py-1 duration-300 md:static">
              ثبت نام
            </button>
          </div>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default MainNavbar;

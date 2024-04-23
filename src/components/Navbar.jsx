import { useState } from 'react';
import {close, logo, menu} from "../assets";
import { navLinks } from '../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setIsActive] = useState(null);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => {
          return (
            <li
              onClick={() => setIsActive(link.id)}
              key={link.id}
              className={`${active === link.id ? "text-dimWhite" : "text-white"} font-poppins font-normal cursor-pointer text-[16px] 
              transition-colors duration-300 ease-out hover:text-dimWhite ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={link.id}
                  onClick={() => setIsActive(link.id)}
                  className={` ${active === link.id ? "text-dimWhite" : "text-white"} font-poppins font-normal cursor-pointer text-[16px] transition-colors duration-300 ease-out hover:text-dimWhite ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

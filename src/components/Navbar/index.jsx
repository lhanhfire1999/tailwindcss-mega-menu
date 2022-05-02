import React from 'react';
import { IMAGES } from '../../assets';

const Navbar = () => {
  return (
    <nav className=" bg-black text-white">
      <div className="max-w-7xl flex items-center justify-between mx-auto relative">
        <a href="/" className="font-bold text-3xl">
          Menu
        </a>
        <ul className="flex font-semibold">
          <li>
            <a href="/" className="menu-item">
              HOME
            </a>
          </li>
          <li className="group">
            <a href="/" className="menu-item group-hover:border-white">
              MEGA
            </a>
            {/* MEGA MENU CONTENT */}
            <div className="grid grid-cols-4 w-full top-full left-0 bg-black absolute invisible opacity-0 mt-8 group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300">
              <ul className="p-2">
                <li>
                  <a href="" className="mega-sub-item-title">
                    Product category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
              </ul>
              <ul className="p-2">
                <li>
                  <a href="" className="mega-sub-item-title">
                    Product category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
              </ul>
              <ul className="p-2">
                <li>
                  <a href="" className="mega-sub-item-title">
                    Product category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
              </ul>
              <ul className="p-2">
                <li>
                  <a href="" className="mega-sub-item-title">
                    Product category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
                <li>
                  <a href="" className="mega-sub-item">
                    Sub category
                  </a>
                </li>
              </ul>
              {IMAGES.map((item, i) => (
                <img key={i} src={item} alt="img" />
              ))}
            </div>
            {/* MEGA MENU CONTENT */}
          </li>
          <li className="relative group">
            <a href="/" className="menu-item group-hover:border-white">
              DROPDOWN
            </a>
            {/* Dropdown menu */}
            <ul className="absolute left-0 top-full w-max min-w-full bg-black mt-8 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300">
              <li>
                <a href="/" className="menu-sub-item">
                  Dropdown menu
                </a>
              </li>
              <li className="sub-dropdown relative">
                <a href="/" className="menu-sub-item">
                  Dropdown menu
                </a>
                {/* Sub dropdown menu */}
                <ul className="sub-dropdown-content absolute top-full left-full w-max bg-black invisible opacity-0 transition-all duration-300">
                  <li>
                    <a href="/" className="menu-sub-item">
                      Sub dropdown menu
                    </a>
                  </li>
                  <li>
                    <a href="/" className="menu-sub-item">
                      Sub dropdown menu
                    </a>
                  </li>
                </ul>
                {/* Sub dropdown menu */}
              </li>
            </ul>
            {/* Dropdown menu */}
          </li>
          <li>
            <a href="/" className="menu-item">
              BLOG
            </a>
          </li>
          <li>
            <a href="/" className="menu-item">
              ABOUT
            </a>
          </li>
        </ul>
        <ul className="flex font-semibold">
          <li>
            <a href="/" className="menu-item">
              ACCOUNT
            </a>
          </li>
          <li>
            <a href="/" className="menu-item">
              CARD
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

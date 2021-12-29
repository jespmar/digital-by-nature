import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";
import MobileMenu from "./mobileMenu";

const width = 200

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, logo, navLinks }) => (
  <div className="bg-white w-full border dark:border-opacity-0 z-10 blur-lg dark:bg-gray-850 dark:text-white px-4">
    <div className="w-full max-w-7xl flex mx-auto justify-between h-40">
<div className="flex w-1/3">
<div className="text-3xl logo self-center text-center text-gray-800 dark:text-white border-b-4 border-indigo-600 p-2">
        <Link to="/">{siteTitle}</Link>
      </div>
</div>
      <div className="hidden self-center justify-around w-1/3 md:flex">
        {navLinks.map((nav) => {
          return <Link className="mx-2 self-center font-mono uppercase hover:underline" to={nav.route}>{nav.displayName}</Link>
        })}

      </div>

      <button
        className="flex md:hidden my-auto text-4xl"
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button>

    </div>
    {showNav && <MobileMenu 
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      navLinks={navLinks}
      showNav={showNav} />}
  </div>
);

export default Header;

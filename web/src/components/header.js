import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";

const width = 200

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, logo }) => (
  <div className="bg-white w-full border dark:border-opacity-0 z-10 blur-lg shadow-xl dark:bg-gray-850 dark:text-white px-4">
    <div className="w-full max-w-7xl flex mx-auto justify-between h-40">
<div className="flex w-1/3">
<div className="text-3xl logo self-center text-center text-gray-800 dark:text-white border-b-4 border-indigo-600 p-2">
        <Link to="/">{siteTitle}</Link>
      </div>
</div>
      <div className="hidden justify-around w-1/3 md:flex">
        <button className="mx-2 font-mono uppercase hover:underline">Home</button>
        <button className="mx-2 font-mono uppercase hover:underline">Blog</button>
        <button className="mx-2 font-mono uppercase hover:underline">About Me</button>

      </div>

      <button
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button>

    </div>
  </div>
);

export default Header;

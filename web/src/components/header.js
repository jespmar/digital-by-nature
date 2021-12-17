import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";

const width = 200

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, logo }) => (
  <div className="bg-white w-full border dark:border-opacity-0 z-10 blur-lg shadow-xl dark:bg-gray-850 dark:text-white ">
    <div className="w-full max-w-7xl flex mx-auto justify-between h-40">
<div className="w-1/3 flex">
<div className="text-3xl logo self-center text-center text-gray-800 dark:text-white">
        <Link to="/">{siteTitle}</Link>
      </div>
</div>
      <div className="flex justify-around w-1/3">
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

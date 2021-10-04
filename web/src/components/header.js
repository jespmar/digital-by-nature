import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";

const width = 200

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className="nav-bg w-full border sticky top-0 z-10 blur-lg shadow-xl">
    <div className="w-full max-w-7xl flex mx-auto justify-between">
<div className="flex flex-col w-1/3">
  <div className="w-auto flex justify-center mb-2">
  <StaticImage src="../assets/logo.svg" alt="logo" width={width} />
  </div>
</div>
<div className="w-1/3 flex">
<div className="text-3xl logo self-center text-center text-gray-800">
        <Link to="/">{siteTitle}</Link>
      </div>
</div>
      <div className="flex justify-around w-1/3">
        <button className="mx-2 font-mono uppercase">Home</button>
        <button className="mx-2 font-mono uppercase">Blog</button>
        <button className="mx-2 font-mono uppercase">Portfolio</button>

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

import React from "react";
import Header from "./header";
import WhoAmI from "./whoAmI"

import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { Link } from "gatsby";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, logo }) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      logo={logo}
    />
    <div className="dark:bg-gray-950 dark:text-white">{children}</div>
    <footer className="w-full bg-gray-850 text-white">
      <div className="w-full flex h-60">
      <div className="text-xl logo self-center text-center mx-auto">
        <Link className="border-b-2 border-indigo-700" to="/">{siteTitle}</Link>
      </div>
      </div>
    </footer>
  </>
);

export default Layout;

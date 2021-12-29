import { Link } from "gatsby";
import React from "react";


const MobileMenu = ({onHideNav, onShowNav, showNav, navLinks}) => {

    return(

        <div className="w-full h-screen fixed top-0 left-0 p-4 bg-white dark:bg-gray-850 flex flex-col">
            <div className="w-full flex border-b-2 border-indigo-700 py-4">
                <div className="w-2/3 text-2xl font-mono">Menu</div>
                <div onClick={showNav ? onHideNav : onShowNav} className="w-1/3 text-right self-center">Close</div>
            </div>
            {navLinks.map((nav) => {
          return <Link onClick={showNav ? onHideNav : onShowNav} className="text-3xl font-mono w-full text-center p-4 border-b-2 border-indigo-500 dark:border-indigo-700 uppercase" to={nav.route}>{nav.displayName}</Link>
        })}
        </div>

    );
}

export default MobileMenu;
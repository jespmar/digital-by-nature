import React from "react";
import PortableText from "./portableText";



const HeaderSection = ({props}) => {

    console.log(props)


  return (
    <div className="w-full">
        <div className="w-full max-w-6xl mx-auto font-mono text-3xl text-center border-b-4 border-indigo-600 p-4 mb-4">
            {props}
        </div>
        </div>
  );
};

export default HeaderSection;
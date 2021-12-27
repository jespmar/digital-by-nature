import React from "react";
import PortableText from "./portableText";



const WhoAmI = ({data}) => {

console.log(data)

  return (
    <div className="w-full bg-gray-100 border-t border-b border-indigo-600 dark:border-gray-800 dark:bg-white p-2 text-black">
    <div className="max-w-6xl mx-auto flex">
      <div className="w-full p-5">
        <p className="text-2xl font-semibold">Who am I, And what am I doing?</p>
        {data && <PortableText blocks={data} />}
      </div>
    </div>
  </div>
  );
};

export default WhoAmI;
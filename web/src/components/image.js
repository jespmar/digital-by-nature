import React from "react";
/* import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers"; */

/* const returnContent = (children) => {
  return children.map((child) => {
    let className;
    if (child.marks.includes("strong")) className = "font-bold";
    return (
      <span className={className} key={child._key}>
        {child.text}
      </span>
    );
  });
}; */

const Image = (image) => {
  //console.log(block);

  return <img className="mb-2 shadow-lg rounded" src={image.asset.url} />;
};

export default Image;

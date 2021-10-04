import React from "react";
import Content from "./content";
import Image from "./image";

const PortableText = ({ blocks }) => {
  //console.log(blocks);
  return blocks.map((block) => {
    if (block._type === "block") return <Content key={block._key} {...block} />;
    if (block._type === "mainImage")
      return <Image key={block._key} {...block} />;
    else return null;
  });
};

export default PortableText;

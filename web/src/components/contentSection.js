import React from "react";
import PortableText from "./portableText";



const ContentSection = ({props}) => {

    const {body} = props;

    console.log(props)


  return (
    <div className="w-full">
        <div className="w-full max-w-5xl p-2 mx-auto">
        {props && <PortableText blocks={props}></PortableText>}
        </div>
        </div>
  );
};

export default ContentSection;
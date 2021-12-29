import React from "react";
import PortableText from "./portableText";



const PageSection = ({props}) => {

    const {_type, body, title} = props;
    console.log(props)

  return (
    <div>{_type === "contentSection" && <PortableText blocks={body}></PortableText>}</div>
  );
};

export default PageSection;
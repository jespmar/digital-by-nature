import React from "react";
import ContentSection from "./contentSection";
import HeaderSection from "./headerSection";
import PortableText from "./portableText";



const PageSection = ({props}) => {

    const {_type, body, title, headerText} = props;
    console.log(props)

  return (
    <div>
        {_type === "contentSection" && <ContentSection props={body} />}
        {_type === "header" && <HeaderSection props={headerText} />}</div>
  );
};

export default PageSection;
import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      logo {
        asset {
          url
        }
      }
    },
  navigation: sanityNavigation {
    navLinks {
      displayName
      route
    }
  }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);

  function handleShowNav() {
    setShowNav(true);
  }

  function handleHideNav() {
    setShowNav(false);
  }

  const data = useStaticQuery(query);
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
    );
  }

  return (
    <Layout
      {...props}
      showNav={showNav}
      siteTitle={data.site.title}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
      navLinks={data.navigation.navLinks}
      logo={data.site?.logo?.asset?.url}
    />
  );
}

export default LayoutContainer;

import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import PageSection from "../components/pageSection";

export const newQuery = graphql`
  query customQuery($id: String!) {
    page: sanityPages(id: { eq: $id }) {
      id
      title
      route {
        current
      }
      _rawSections(resolveReferences: {maxDepth: 10})
    }
  }
`;

const PageTemplate = (props) => {
  console.log("page")
  const { data, errors } = props;
  const page = data && data.page;

  console.log({page})
  return (
    <Layout>
      <div className="w-full h-full p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="font-mono text-3xl w-full border-b-4 border-indigo-600 pb-4 text-center mb-4">{page.title}</div>
          {page && page._rawSections.map((section) => {
        return <PageSection key={section._key} props={section} />
      })}
          </div>
      </div>

    </Layout>
  );
};

export default PageTemplate;

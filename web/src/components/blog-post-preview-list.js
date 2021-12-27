import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";
import PortableText from "./portableText";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className="text-3xl text-center font-mono border-b-4 border-indigo-600 pb-4 mb-4">{props.title}</h2>}
      <ul className="max-w-4xl mx-auto p-5">
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;

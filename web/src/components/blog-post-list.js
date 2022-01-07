import * as styles from "./blog-post-preview-list.module.css";
import { Link } from "gatsby";
import React from "react";
import PortableText from "./portableText";
import BlogPostPreviewSmall from "./blog-post-preview-small";

function BlogPostList(props) {
  return (
    <div className="pt-5">
      {props.title && <h2 className="text-3xl text-center font-mono border-b-4 border-indigo-600 pb-4 mb-4">{props.title}</h2>}
      <ul className="max-w-4xl mx-auto p-5">
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreviewSmall {...node} isInList />
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

BlogPostList.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostList;

import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreviewSmall(props) {
  console.log(props)
  return (
    <Link
      className="mx-auto mb-3 flex"
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className="mb-3 border-b border-indigo-700 pb-5 w-full">
        <h3 className="text-4xl font-semibold leading-tight">{props.title}</h3>
        <div className="text-xl font-semibold text-indigo-500 mb-2">
          {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
        </div>
        {props._rawExcerpt && (
          <div className="text-ellipsis overflow-hidden">
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  );
}

export default BlogPostPreviewSmall;

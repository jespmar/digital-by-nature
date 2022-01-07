import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  return (
    <Link
      className="mx-auto mb-10"
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className="rounded mb-2">
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(900)
              .height(Math.floor((9 / 16) * 900))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
            className="rounded-md"
          />
        )}
      </div>
      <div className="mb-10 border-b border-indigo-700 pb-5">
        <h3 className="text-4xl font-semibold leading-tight">{props.title}</h3>
        <div className="text-xl font-semibold text-indigo-500">
          {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
        </div>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div>
          <button className="rounded w-full dark:bg-indigo-600 bg-indigo-500 mt-3 font-semibold text-white p-2 hover:bg-gray-700 ">Read more</button>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;

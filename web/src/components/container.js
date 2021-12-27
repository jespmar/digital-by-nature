import React from "react";

import * as styles from "./container.module.css";

const Container = ({ children }) => {
  return <div className="max-w-6xl w-full mx-auto h-full px-4">{children}</div>;
};

export default Container;

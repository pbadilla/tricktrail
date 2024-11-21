import React from "react";

import "./Box.styles.scss";

const Box = ({ children }: LayoutProps): JSX.Element => {
  return <div className="box">{children}</div>;
};

export default Box;
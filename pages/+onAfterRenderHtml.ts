import React from "react";
import { extractStyle } from "@ant-design/cssinjs";
import { useConfig } from "vike-react/useConfig";
import type { PageContext } from "vike/types";

export default (pageContext: PageContext) => {
  const config = useConfig();

  if (pageContext.config.antdCache) {
    const styleTag = React.createElement("style", {
      id: "antd-cssinjs",
      dangerouslySetInnerHTML: {
        __html: extractStyle(pageContext.config.antdCache, true),
      },
    });
    config({
      Head: styleTag,
    });
  }
};

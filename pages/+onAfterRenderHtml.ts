import React from "react";
import { extractStyle } from "@ant-design/cssinjs";
import { useConfig } from "vike-react/useConfig";
import type { PageContext } from "vike/types";

export default (pageContext: PageContext) => {
  if (pageContext.config._antdCache) {
    const styleTag = React.createElement("style", {
      id: "antd-cssinjs",
      dangerouslySetInnerHTML: {
        __html: extractStyle(pageContext.config._antdCache, true),
      },
    });
    const config = useConfig();

    config({
      Head: styleTag,
    });
  }
};

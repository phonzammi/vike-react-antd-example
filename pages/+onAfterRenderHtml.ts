import React from "react";
import { extractStyle } from "@ant-design/cssinjs";
import { useConfig } from "vike-react/useConfig";
import type { PageContext } from "vike/types";

export default (pageContext: PageContext) => {
  const config = useConfig();
  const cache = pageContext.antdCache;

  if (cache) {
    const styleTag = React.createElement("style", {
      id: "antd-cssinjs",
      dangerouslySetInnerHTML: {
        __html: extractStyle(cache, true),
      },
    });
    config({
      Head: styleTag,
    });
  }
};

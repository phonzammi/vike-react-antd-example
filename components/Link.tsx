import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Typography } from "antd";
export function Link({ href, children }: { href: string; children: string }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <Typography.Link href={href} className={isActive ? "is-active" : undefined}>
      {children}
    </Typography.Link>
  );
}

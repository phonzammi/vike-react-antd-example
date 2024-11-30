import React from "react";
import { Counter } from "./Counter.js";
import { Typography } from "antd";

export default function Page() {
  return (
    <>
      <Typography.Title>My Vike app</Typography.Title>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}

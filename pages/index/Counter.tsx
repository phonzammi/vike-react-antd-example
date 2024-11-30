import { Button } from "antd";
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button type="primary" onClick={() => setCount((count) => count + 1)}>Counter {count}</Button>
  );
}

import React from "react";
import { useData } from "vike-react/useData";
import { Typography, List } from "antd";
import type { Data } from "./+data.js";

export default function Page() {
  const movies = useData<Data>();
  return (
    <>
      <Typography.Title>Star Wars Movies</Typography.Title>
      <List
        size="small"
        dataSource={movies}
        renderItem={
          ({ id, title, release_date }) => <List.Item>{id}. <a href={`/star-wars/${id}`}>{title}</a> ({release_date})</List.Item>
        }
      />
      <p>
        Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.
      </p>
    </>
  );
}

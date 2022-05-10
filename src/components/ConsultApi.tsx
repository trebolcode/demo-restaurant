import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
}

const ConsultApi = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const defaultPosts: IPost[] = [];

  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] =
    useState(defaultPosts);

  useEffect(() => {
    axios
      .get<IPost[]>(URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <section className="w-full h-min flex flex-col justify-center bg-daily bg-center bg-fixed items-center">
      <h3 className="text-white text-4xl">Daily note information</h3>
      <h4 className="text-white text-3xl">Daily note</h4>
      <div className="h-min text-white">
        {posts.map((item, index) => (
          <div key={index}>
            <h3>{item.id}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultApi;

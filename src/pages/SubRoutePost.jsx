import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const SubRoutePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const getPosts = async () => {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const request = await fetch(endpoint, {
      method: "GET",
    });
    const data = await request.json();
    setPost(data);
  };

  useEffect(() => {
    getPosts();
  }, [id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <br />
      <br />
      <br />
      <p>{post.body}</p>
      <Outlet />
    </div>
  );
};

export default SubRoutePost;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const param = useParams();
  console.log(" param : ", param);

  const [post, setPost] = useState({});
  const getPosts = async () => {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${param.id}`;
    const request = await fetch(endpoint, {
      method: "GET",
    });
    const data = await request.json();
    setPost(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
      <br />
      <br />
      <br />
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePostPage;

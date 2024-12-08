import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const endpoint = "https://jsonplaceholder.typicode.com/posts/";
    const request = await fetch(endpoint, {
      method: "GET",
    });
    const data = await request.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <ul>
      {posts.map((item) => {
        return (
          <li key={item.id} className="mb-3">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-gray-800"
                  : isActive
                  ? "text-blue-600 font-bold"
                  : ""
              }
              to={`/route-2/${item.id}`}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;

import { useEffect, useState } from "react";

const useFetch = (endPoint, method = "GET") => {
  const [post, setPost] = useState([]);
  const fetchDataRequest = async () => {
    const request = await fetch(endPoint, {
      method: method,
    });
    const response = await request.json();
    return response;
  };

  useEffect(() => {
    const data = fetchDataRequest();
    setPost(data);
  }, []);

  return { data: post };
};

export default useFetch;

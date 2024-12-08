// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);

//   const getPosts = async () => {
//     const endpoint = "https://jsonplaceholder.typicode.com/posts/";
//     const request = await fetch(endpoint, {
//       method: "GET",
//     });
//     const data = await request.json();
//     setPosts(data);
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <div>
//       {/* <Link to="/profile"> go to profile</Link> */}
//       <ul>
//         {posts.map((postItem) => {
//           return (
//             <li key={postItem.id}>
//               <Link to={`/post/${postItem.id}`}>{postItem.title}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;

import Box from "../components/Box";
import InputContext from "../context/inputContext.js";
import { useState } from "react";
const HomePage = () => {
  const [firstName, setFirstName] = useState("");

  const contextValue = {
    label: "your name",
    type: "text",
    placeholder: "Enter Your Name",
    handleChange: (e) => setFirstName(e.target.value),
  };
  return (
    <div>
      <InputContext.Provider value={contextValue}>
        <Box />
      </InputContext.Provider>

      <hr />
      <p>{firstName}</p>
      {/* <Input
        placeholder="enter your Name"
        label="your name"
        type="text"
        handleChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        placeholder="enter your password"
        label="your pass"
        type="password"
        handleChange={(e) => setPassword(e.target.value)}
      />
      <hr />
      <p> first name : {firstName}</p>
      <p> password : {password}</p> */}

      {/* <label htmlFor="text-input" id="text-input-label" ref={labelRef}>
        enter your name
      </label>
      <input
        className="border border-gray-900 rounded-lg "
        id="text-input"
        type="text"
        placeholder="enter something"
        onKeyUp={(event) => {
          handleKey(event);
        }}
      />
      <p>{inputValue}</p>
      <Box></Box>
      <div className="h-10 w-10 bg-red-400" onMouseEnter={handleMouse}></div> */}
    </div>
  );
};

export default HomePage;

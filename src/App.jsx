// import { useEffect, useState } from "react";
// import "./App.css";
// // import TodoApp from './TodoApp';
// // import FlightCard from './FlightCard';
// // import FlightPrice from './FlightPrice';
// // import SimpleCard from './SimpleCard';
// // import ShowStatus from './ShowStatus';
// import Box from "./Box";
// // import Button from './Button';

// function App() {
//   // ===============================||show product
//   //   const [list,setList]=useState([])
//   //   async function productList(){
//   //   let endPoint = "https://fakestoreapi.com/products";
//   //   let getProduct = await fetch(endPoint);
//   //   let result = await getProduct.json();
//   // setList(result);
//   // console.log(result)
//   //   }
//   //   const [toggle,settoggle]=useState(false);
//   // useEffect(()=>{
//   //   productList();
//   // },[toggle])
//   // ====================================||counter button function
//   // const [count,setcount]=useState(0);
//   // const decrease=()=>{
//   //   if(count>0){
//   //     setcount(count-1);
//   //   }
//   // }

//   const [isOnline, setIsOnline] = useState(true);

//   console.log(window.navigator.onLine);

//   // function updateIsOnline() {
//   //   setIsOnline(window.navigator.onLine);
//   // }
//   // useEffect(() => {
//   // updateIsOnline();
//   // }, [window.navigator.onLine]);

//   useEffect(() => {
//     window.addEventListener("online", () => setIsOnline(true));
//     window.addEventListener("offline", () => setIsOnline(false));
//   }, []);

//   return (
//     <>
//       {/* ------------------------------||show product */}

//       {/* <Button click={()=>{settoggle(!toggle)}}>
//   {toggle? "hide Data":"show Data"}
//   </Button>
//  {toggle ?
//   list.map(item =>(
// <SimpleCard
// price={item.price}
// image={item.image}
// title={item.title}
// key={item.id}
// />
//   )):""
// }  */}
//       {/* ----------------------------------|| counter button */}
//       {/* <Box>
//   <Button click={decrease}>-</Button>
//    <span>{count}</span>
//    <Button click={()=>{setcount(count+1)}}>+</Button>
// </Box> */}
//       {/* =========================================|| Online cheking */}
//       {<Box>{isOnline ? "online" : "offline"}</Box>}
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Box from "./Box";
import Button from "./Button";

const App = () => {
  const [quote, setQuote] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const getRandomQuote = async () => {
    setIsFetching(true);
    const endPoint = "http://api.quotable.io/random";
    const request = await fetch(endPoint);
    const response = await request.json();
    setQuote(response);
    setIsFetching(false);
  };
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
      <Button disabled={isFetching} click={getRandomQuote}>
        {isFetching ? "Fetching...." : "Get Quote"}
      </Button>

      {quote !== null && (
        <Box>
          <q>{quote.content}</q>
          <br />
          <br />
          <i>{quote.author}</i>
        </Box>
      )}
    </>
  );
};

export default App;

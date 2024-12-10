import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFoundPage";

import BasketPage from "./pages/BasketPage";
// import Footer from "./components/Footer";
// redux
// zustand
// jutai
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
export default App;

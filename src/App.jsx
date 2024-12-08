import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import SinglePostPage from "./pages/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage";
import RouteOnePage from "./pages/RouteOnePage";
import RouteTwoPage from "./pages/RouteTwoPage";
import RouteThreePage from "./pages/RouteThreePage";
import SubRoutePost from "./pages/SubRoutePost";
import NestedRoute from "./pages/NestedRoute";
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
        <Route path="/route-1" element={<RouteOnePage />} />
        <Route path="/route-2" element={<RouteTwoPage />}>
          <Route path=":id/" element={<SubRoutePost />}>
            <Route path=":slug" element={<NestedRoute />} />
          </Route>
        </Route>
        <Route path="/route-3" element={<RouteThreePage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
export default App;

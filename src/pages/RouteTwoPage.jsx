import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const RouteTwoPage = () => {
  return (
    <div className="grid grid-cols-5 gap-6 p-8">
      <aside className="col-start-1 col-end-3 border border-gray-950 p-2 rounded-lg ">
        <SideBar />
      </aside>
      <main className="col-start-3 col-end-6  border border-gray-950 p-2 rounded-lg ">
        <Outlet />
      </main>
    </div>
  );
};

export default RouteTwoPage;

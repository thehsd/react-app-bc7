import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 bg-stone-400 flex justify-center">
      <nav className="flex gap-4">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-gray-800"
              : isActive
              ? "text-blue-600 font-bold"
              : ""
          }
          to="/route-1"
        >
          Route 1
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-gray-800"
              : isActive
              ? "text-blue-600 font-bold"
              : ""
          }
          to="/route-2"
        >
          Route 2
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-gray-800"
              : isActive
              ? "text-blue-600 font-bold"
              : ""
          }
          to="/route-3"
        >
          Route 3
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

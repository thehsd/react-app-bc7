import { NavLink } from "react-router-dom";
// import useBasket from "../store/useBasket";
import { useSelector } from "react-redux";
import { basketStates } from "../redux/slices/basketSlice";

const Header = () => {
  const { items } = useSelector(basketStates);
  // const { items } = useBasket();
  const calcTotalItemCount = () => {
    return items.reduce((acc, curr) => acc + curr.quantity, 0);
  };
  return (
    <header className="p-4 bg-sky-100 ">
      <nav className="flex justify-between gap-4">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-gray-800"
              : isActive
              ? "text-blue-600 font-bold"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-gray-800"
              : isActive
              ? "text-blue-600 font-bold"
              : ""
          }
          to="/basket"
        >
          Basket {calcTotalItemCount()}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

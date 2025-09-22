import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Home, Info, Phone, ShoppingCart, Store, User2 } from "lucide-react"; // use User2 to fix icon error
// import Logo from "../assets/download.png"

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-orange-500 shadow-md px-8 py-3 sticky top-0 z-50">
      <div className="flex items-center rounded-2xl">
        <Link to="/">
          <img className="w-28 h-12 object-contain rounded-full" src={LOGO_URL} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center space-x-6 text-gray-700 font-semibold">
          <li className="text-lg text-white">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>

          <li className="flex items-center space-x-1 text-sm group text-white hover:text-black transition-colors">
            <Home className="w-5 h-5" />
            <Link to="/">Home</Link>
          </li>

          <li className="flex items-center space-x-1 text-sm group text-white hover:text-black transition-colors">
            <Info className="w-5 h-5" />
            <Link to="/about">About us</Link>
          </li>

          <li className="flex items-center space-x-1 text-sm group text-white hover:text-black transition-colors">
            <Phone className="w-5 h-5" />
            <Link to="/contact">Contact us</Link>
          </li>

          <li className="flex items-center space-x-1 text-sm group text-white hover:text-black transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <Link to="/grossery">Grossery</Link>
            {/* <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span> */}
          </li>

          <li className="flex items-center space-x-1 text-sm group text-white hover:text-black transition-colors cursor-pointer">
            <Store className="w-5 h-5" />
            Cart
          </li>

          <button
            className="flex items-center space-x-1 text-white bg-orange-500 px-4 py-1 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            <User2 className="w-5 h-5" />
            <span>{btnName}</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

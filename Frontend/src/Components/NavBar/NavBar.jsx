import { IoEarth } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const NavBar = () => {
  const { cartItems } = useCart(); // Ensure you destructure the cartItems correctly


  const getProductQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <nav className="font-custom font-bold bg-primary bg-opacity-20 shadow-md mx-auto rounded-b-3xl z-40 fixed w-[100vw]">
      <div className="container w-[85%] mx-auto px-5 py-[16px] h-[4.5rem] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 transition-colors hover:text-accent">
            <IoEarth className="text-xl text-gray-500" />
            <p className="text-lg font-bold text-gray-500">Earth</p>
          </Link>
        </div>

        <div className="flex items-center gap-2">
   
          <div className="relative text-2xl">
            <Link to="/Cart" className="relative">
              <FaCartShopping className="font-extrabold text-gray-300" />
              {getProductQuantity() > 0 && (
                <div className="absolute -top-3 -right-3 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                  {getProductQuantity()}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

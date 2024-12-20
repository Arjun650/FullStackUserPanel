import { useState } from "react";
import { useCart } from "../../Components/CartContext/CartContext";
import PlaceOrder from "../../Components/PlaceOrder/PlaceOrder";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  const [isVisible, setIsVisible] = useState(false); 

  const handleProceedToCheckout = () =>{
    setIsVisible(true); 
  }



  return (
    <div className="font-bold pt-20 font-custom lg:w-[90%] text-gray-700 min-h-[100vh] lg:max-w-[1200px] mx-auto">
      <div className="mb-10 text-5xl font-thin text-center text-gray-800">
        Shopping Cart
      </div>

      <div className="p-4">
        <ul className="hidden pb-2 font-semibold text-gray-600 uppercase border-b md:flex justify-between">
          <li className="w-1/3 text-left">Product</li>
          <li className="w-1/6 text-center">Price</li>
          <li className="w-1/6 text-center">Quantity</li>
          <li className="w-1/6 text-center">Total</li>
          <li className="w-1/6 text-center">Actions</li>
        </ul>

        <div className="mt-4 divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between py-4"
            >
              {/* Product Info */}
              <div className="flex items-center w-full mb-4 text-left md:w-1/3 md:mb-0">
                <img
                  src={item.img}
                  className="w-16 h-16 sm:w-20 sm:h-20 mr-4 rounded"
                  alt={item.name}
                />
                <p className="text-sm sm:text-base">{item.title}</p>
              </div>

              {/* Price */}
              <div className="w-full mb-2 text-center md:w-1/6 md:mb-0 text-sm sm:text-base">
                ₹{item.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-center w-full mb-2 text-center md:w-1/6 md:mb-0">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                  -
                </button>
                <span className="mx-4 text-sm sm:text-base">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                  +
                </button>
              </div>

              {/* Total */}
              <div className="w-full mb-2 text-center md:w-1/6 md:mb-0 text-sm sm:text-base">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Actions */}
              <div className="w-full text-center md:w-1/6">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="mt-6 text-right">
          <p className="text-lg sm:text-xl font-semibold">
            Subtotal: ₹{subtotal.toFixed(2)}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Taxes and shipping calculated at checkout
          </p>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center md:justify-end mt-8">
          <button className="px-4 sm:px-6 py-2 sm:py-3 text-white transition duration-200 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 text-sm sm:text-base" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <PlaceOrder isVisible={isVisible} setIsVisible = {setIsVisible}/>
    </div>
  );
};

export default Cart;

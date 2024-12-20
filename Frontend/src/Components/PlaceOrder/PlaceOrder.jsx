import { useCart } from "../../Components/CartContext/CartContext";
import toast, { Toaster } from 'react-hot-toast';


// eslint-disable-next-line react/prop-types
const PlaceOrder = ({ isVisible, setIsVisible }) => {
  const { cartItems, subtotal } = useCart();

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        const formData = new FormData(e.target);
    const orderData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      address: formData.get("address"),
      contact:formData.get("contact"),
      products: cartItems.map(item => ({
        productId: item._id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      finalPrice: subtotal
    };

    console.log(orderData)
  
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/order/placeOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || toast.error("Error placing order"));
        
      }
      else{
        toast.success("Order Placed Successfully")
      }
      // handle success, e.g., display confirmation or redirect
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  

  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 flex flex-col p-6`}
      >
        {/* Close Button */}
        <button
          className="text-gray-500 hover:text-gray-800 self-end text-lg mb-4"
          onClick={handleClose}
        >
          ×
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Place Your Order
          </h2>
          <label className="flex flex-col text-sm text-gray-600">
            First Name:
            <input
              type="text"
              name="firstname"
              required
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Last Name:
            <input
              type="text"
              name="lastname"
              required
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Address:
            <textarea
              name="address"
              required
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Contact:
            <input
              type="tel"
              name="contact"
              required
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </label>
          <button
            type="submit"
            className="bg-buttonCol text-white px-4 py-2 rounded hover:brightness-75"
          >
            Place Order
          </button>
        </form>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default PlaceOrder;

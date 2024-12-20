import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";
import axios from "axios";  // Import Axios
import toast, { Toaster } from 'react-hot-toast';


const ShoppingGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { addToCart, updateQuantity, cartItems } = useCart();
  

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/getProduct/getProducts");
        setProducts(response.data); 
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (details) => {
    setModalData(details);
    setIsOpen(true);
  };

  const getProductQuantity = (id) => {
    const product = cartItems.find((item) => item._id === id);
    return product ? product.quantity : 0;
  };

  // Loading and error handling
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="font-bold font-custom lg:w-[90%] text-gray-700 h-[100vh] lg:max-w-[2500px] mt-10 z-0 mx-auto relative">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-5 bg-white rounded-lg w-96">
            <img
              src={modalData.img}
              alt={modalData.title}
              className="w-full rounded-md"
            />
            <h2 className="mt-3 text-lg font-bold">{modalData.title}</h2>
            <p className="text-gray-600">{modalData.description}</p>
            <p className="mt-2 font-semibold text-black">Price: ₹ {modalData.price}</p>
            <button
              className="px-4 py-2 mt-4 text-white bg-black rounded-md"
              onClick={() => {
                
                setIsOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product) => (
          <div
            key={product._id} 
            className="flex flex-col items-center w-64 gap-2 p-3 bg-gray-300 rounded-2xl h-96"
          >
            <div
              className="relative w-full bg-white cursor-pointer group h-60 rounded-xl"
              onClick={() => openModal(product)}
            >
              <img
                src={product.img}
                alt={product.title}
                className="group-hover:brightness-75 w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
                <FaEye className="text-4xl text-black" />
              </div>
            </div>

            <div>
              <p>{product.title}</p>
            </div>
            <div>
              <p>₹ {product.price}</p>
            </div>

            {getProductQuantity(product._id) === 0 ? (
              <button
                className="px-4 w-full py-2 mt-2 text-white bg-buttonCol rounded-md"
                onClick={() => {
                  toast.success("product added to cart");
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center justify-between mt-2 space-x-2">
                <button
                  className="px-3 py-2 text-white bg-red-500 rounded-md"
                  onClick={() => updateQuantity(product._id, -1)}
                >
                  -
                </button>
                <span className="px-4 py-2 bg-gray-200 rounded-md">
                  {getProductQuantity(product._id)}
                </span>
                <button
                  className="px-3 py-2 text-white bg-green-500 rounded-md"
                  onClick={() => updateQuantity(product._id, 1)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default ShoppingGrid;

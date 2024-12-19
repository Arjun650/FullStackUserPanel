import { useState } from "react";
import img from "../../assets/img4.png";
import { FaEye } from "react-icons/fa";

const ShoppingGrid = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [cartCounts, setCartCounts] = useState({});

    const openModal = (details) => {
        setModalData(details);
        setIsOpen(true);
    };

    const updateCart = (id, increment) => {
        setCartCounts((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + increment,
        }));
    };

    const products = [
        {
            id: 1,
            img: img,
            title: "Beautiful Flower",
            description: "This is a beautiful flower.",
            price: 1000,
        },
        {
            id: 2,
            img: img,
            title: "Another Flower",
            description: "This is another beautiful flower.",
            price: 1200,
        },
        {
            id: 3,
            img: img,
            title: "Another Flower",
            description: "This is another beautiful flower.",
            price: 1200,
        },
        {
            id: 4,
            img: img,
            title: "Another Flower",
            description: "This is another beautiful flower.",
            price: 1200,
        },
        {
            id: 5,
            img: img,
            title: "Another Flower",
            description: "This is another beautiful flower.",
            price: 1200,
        },
    ];

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
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="flex flex-wrap gap-5">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center w-64 gap-2 p-3 bg-gray-300 rounded-2xl h-96"
                    >
                        <div
                            className="relative w-full bg-white cursor-pointer group h-60 rounded-xl"
                            onClick={() => openModal(product)}
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                                className="group-hover:brightness-75"
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

                        <div className="w-full p-2 text-center text-white rounded-xl bg-buttonCol">
                            {cartCounts[product.id] > 0 ? (
                                <div className="flex items-center justify-between">
                                    <button
                                        className="px-3 py-1 text-white bg-red-500 rounded-lg"
                                        onClick={() => updateCart(product.id, -1)}
                                    >
                                        -1
                                    </button>
                                    <span className="font-bold">{cartCounts[product.id]}</span>
                                    <button
                                        className="px-3 py-1 text-white bg-green-500 rounded-lg"
                                        onClick={() => updateCart(product.id, 1)}
                                    >
                                        +1
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="w-full py-1 text-white rounded-md bg-buttonCol"
                                    onClick={() => updateCart(product.id, 1)}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingGrid;

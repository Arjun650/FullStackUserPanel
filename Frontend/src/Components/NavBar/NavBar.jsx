import { IoEarth } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const onClearSearch = () =>{
        setSearchQuery(""); 
    }

    return (
        <nav className="font-custom font-bold bg-primary bg-opacity-20 shadow-md mx-auto rounded-b-3xl z-50 fixed w-[100vw]">
            <div className="container mx-auto px-5 py-[16px] h-[4.5rem] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center space-x-2 transition-colors hover:text-accent">
            <IoEarth className="text-xl text-gray-500" /> 
            <p className="text-lg font-bold text-gray-500">Earth</p>
          </Link>
                    {/* <a href="/" className="flex items-center space-x-2 transition-colors hover:text-accent">
                        <p className="text-lg font-bold text-gray-500">Earth</p>
                        <IoEarth className="text-xl text-gray-500" />
                    </a> */}
                </div>

                <div className="flex items-center gap-2">
                    <SearchBar value={searchQuery}
                                onChange={({target}) =>{setSearchQuery(target.value)}} 
                                onClearSearch={onClearSearch}
                    />
                    <div className="text-2xl">
                    <Link to='/Cart'>
                    <FaCartShopping className="font-extrabold text-gray-300"/>
                    </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;

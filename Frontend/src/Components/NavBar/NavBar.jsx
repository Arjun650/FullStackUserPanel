import { IoEarth } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const onClearSearch = () =>{
        setSearchQuery(""); 
    }

    return (
        <nav className="font-custom font-bold bg-primary bg-opacity-0 shadow-md mx-auto rounded-b-3xl fixed w-[100vw]">
            <div className="container mx-auto px-5 py-[16px] h-[4.5rem] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center space-x-2 hover:text-accent transition-colors">
            <IoEarth className="text-xl text-gray-500" /> 
            <p className="text-lg font-bold text-gray-500">Earth</p>
          </Link>
                    {/* <a href="/" className="flex items-center space-x-2 hover:text-accent transition-colors">
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
                    <CiShoppingCart className="text-gray-200 font-extrabold"/>
                    </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;

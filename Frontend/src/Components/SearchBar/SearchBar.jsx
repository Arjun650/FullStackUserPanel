import { FaMagnifyingGlass } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"

// eslint-disable-next-line react/prop-types
const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {

  return (
    <div className=" lg:w-40 w-36 flex items-center px-4 bg-slate-300 text-gray-500 rounded-md">
        <input type="text"
            placeholder="Search Product"
            className="w-full text-xs bg-transparent py-[11px] outline-none"
            value={value}
            onChange={onChange} 
        />
{   value && <IoMdClose className="text-xl text-slate-400 cursor-pointer hover:text-black mr-3" onClick={onClearSearch}/>
}        <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-black" onClick={handleSearch}/>
    </div>
  )
}

export default SearchBar
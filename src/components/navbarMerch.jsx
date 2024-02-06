import { Link } from "react-router-dom";
import BagStore from "./bagStore";
import { useState } from "react";

const NavbarMerch = () => {
  const [count, setCount] = useState(0);
  return (
    <nav className="sticky top-0 right-0 left-0 w-full z-50 bg-white flex items-center justify-between lg:px-10 px-5 py-3">
      <div className="flex gap-10 items-center">
        <Link to="/">
          <h1 className="font-bold text-2xl tracking-tighter">IU</h1>
        </Link>
        <ul className="lg:flex hidden gap-10 items-center">
          <Link
            
            to="/merchandise"
          >
            All
          </Link>
          <Link
            
            to="/merchandise/items"
          >
            Merch
          </Link>
          <Link
            
            to="/merchandise/music"
          >
            Music
          </Link>
          <Link
            
            to="/merchandise/photobook"
          >
            PhotoBook
          </Link>
        </ul>
      </div>

      <div className="flex gap-5 items-center">
        <div className="leading-tight">
          <input
            type="text"
            placeholder="search"
            className="border border-neutral-300 rounded-full px-3 h-9 lg:w-[200px] lg:focus:w-[240px] transition-all duration-300 outline-blue-400"
          />
        </div>
        <BagStore store={count} />
      </div>
    </nav>
  );
};

export default NavbarMerch;

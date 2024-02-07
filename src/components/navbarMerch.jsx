import { Link } from "react-router-dom";
import BagStore from "./bagStore";
import { useState } from "react";
import { useCartStore, useStore } from "../utils/store";
import Navigation from "./navigation";
import Sosmed from "./sosmed";

const NavbarMerch = () => {
  const { count } = useStore();
  const { cart } = useCartStore();
  // const [count, setCount] = useState(0);
  return (
    <nav className="sticky top-0 right-0 left-0 w-full z-50 bg-white flex items-center justify-between gap-2  lg:px-10 px-5 py-3">
      <div className="flex items-center lg:gap-10 gap-3">
        <Navbar />
        <Link to="/merchandise" className="font-bold tracking-tighter text-xl">
          IU
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        <div className="leading-tight">
          <input
            type="text"
            placeholder="search"
            className="border border-neutral-300 w-fit rounded-full px-3 h-9 lg:focus:w-[240px] transition-all duration-300 outline-blue-400"
          />
        </div>
        <BagStore store={cart.length} />
      </div>
    </nav>
  );
};

export default NavbarMerch;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className={`flex  transition-all duration-200 z-40`}>
      <button
        className="z-50 transition-all duration-200"
        onClick={toggleDropdown}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </button>
      <div
        className={`absolute -top-5 right-0 left-0 pw-full bg-white flex justify-center items-center  ${
          isOpen && "translate-y-5 "
        } h-screen -translate-y-full transition-all duration-500`}
      >
        <Navigation onClick={toggleDropdown} />
        <footer
          className={`absolute bottom-3 left-0 right-0 w-full text-white flex justify-between items-center px-10`}
        >
          <Sosmed isOpen={isOpen} />
        </footer>
      </div>
    </nav>
  );
};

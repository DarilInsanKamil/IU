import { useState } from "react";
import Navigation from "./navigation";
import SidebarCart from "./sidebarcart";
import { useCartStore } from "../utils/store";

const BagStore = ({ store }) => {
  const [openCart, setOpenCart] = useState(false);
  const toggleDropdown = () => {
    setOpenCart(!openCart);
    if (!openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const {removeAllProduct} = useCartStore()
  return (
    <section className="relative ">
      <button onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28px"
          height="28px"
          className="text-black"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3.742 18.555C4.942 20 7.174 20 11.64 20h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 18.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 4.922C17.125 4 15.536 4 12.361 4h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z" />
            <path strokeLinecap="round" d="M9.17 8a3.001 3.001 0 0 0 5.66 0" />
          </g>
        </svg>
      </button>

      <div className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 py-[2px] flex justify-center items-center text-[10px]">
        <p>{store}</p>
      </div>
      <div
        className={`lg:w-[25vw] w-[90vw] bg-white shadow-md fixed top-0 right-0 ${
          openCart ? "translate-x-0" : "translate-x-full" 
        }  h-screen transition-all duration-500`}
      >
        <section className="p-5">
          <div className="flex justify-between items-center mb-5">
            <button onClick={toggleDropdown}>
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
                className=""
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <button className="" onClick={removeAllProduct}>
              Remove all
            </button>
          </div>

          <SidebarCart />
        </section>
      </div>
    </section>
  );
};
export default BagStore;

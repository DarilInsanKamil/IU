import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

const Root = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 0) {
        setScrolling(true);
      } else if(currentScrollPos == 0) {
        setScrolling(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <ScrollRestoration />
      <header
        className={`fixed w-full z-50 top-0 right-0 left-0 transition-all duration-150 ${
          scrolling && 'bg-neutral-900 backdrop-blur-sm'
        }`}
      >
        <Navbar />
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

import { Outlet, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

const Root = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldHideNavbar = currentScrollPos > prevScrollPos;
    
      setScrolling(shouldHideNavbar);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <header
        className={`fixed w-full z-50 top-0 right-0 left-0 ${
          scrolling ? "-top-14" : ""
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

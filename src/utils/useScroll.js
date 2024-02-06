import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scrolling, setScrolling] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const shouldHideNavbar = prevScrollPos < currentScrollPos;

            setScrolling(shouldHideNavbar);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);
    return {
        scrolling
    }
}
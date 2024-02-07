import { Link } from "react-router-dom";
import Sosmed2 from "./sosmed2";
const Navigation = ({ onClick }) => {
  return (
    <section className="w-full grid lg:grid-cols-12 grid-cols-6 font-semibold relative">
      <ul className="flex flex-col lg:text-[52px] text-[32px] gap-3 font-semibold lg:col-start-6 lg:col-span-3 col-start-1 col-span-6 px-10 ">
        <Link
          onClick={onClick}
          to="/"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Home
        </Link>
        <Link
          onClick={onClick}
          to="/about"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Profile
        </Link>
        <Link
          onClick={onClick}
          to="/discography"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Discography
        </Link>
        <Link
          onClick={onClick}
          to="/merchandise"
          className="tracking-tight hover:tracking-wide transition-all"
        >
          Merch
        </Link>
      </ul>
    </section>
  );
};

export default Navigation;

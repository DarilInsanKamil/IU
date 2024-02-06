import { Outlet } from "react-router-dom";
import NavbarMerch from "../../components/navbarMerch";

const MerchLayout = () => {
  return (
    <div>
      <NavbarMerch />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default MerchLayout;

import { Outlet } from "react-router-dom";
import NavbarMerch from "../../components/navbarMerch";

const MerchLayout = () => {
  return (
    <div>
      <NavbarMerch />
      <div id="detail" className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MerchLayout;

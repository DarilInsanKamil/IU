import { Outlet } from "react-router-dom";

const MerchLayout = () => {
  return (
    <div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default MerchLayout;

import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header></Header>

      {/* children */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* children */}

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;

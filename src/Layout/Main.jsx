import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  // const location = useLocation();
  // console.log(location);
  // const noHeaderFooter = location.pathname.includes("login");
  // const noHeaderFooter1 = location.pathname.includes("singUp");
  return (
    <div>
      {/* {noHeaderFooter || noHeaderFooter1 || <NavBar></NavBar>} */}
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* {noHeaderFooter || noHeaderFooter1 || <Footer></Footer>} */}
    </div>
  );
};

export default Main;

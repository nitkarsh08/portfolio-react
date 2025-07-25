import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router";
import Themes from "./themes/Themes";
const AppLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Themes></Themes>
    </>
  );
};
export default AppLayout;

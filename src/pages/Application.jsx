import { Outlet } from "react-router-dom";
import Navbar from "../components/application/Navbar";

const Application = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
};

export default Application;

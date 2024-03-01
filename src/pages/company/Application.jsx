import { Outlet } from "react-router-dom";
import Navbar from "../../components/application/Navbar";

const Application = () => {
  return (
    <div className="w-full h-screen flex flex-col place-items-center bg-gray-300">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Application;

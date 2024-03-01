import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-white">
      <nav className="w-full h-auto py-2 md:py-6 flex justify-between place-items-center ">
        <div className="w-[13%] max-md:w-[40%]">
          <h1 className="text-xl font-bold">Hackathon</h1>
        </div>
        <ul className="w-auto hidden md:flex gap-8">
          <NavLink href="/" className="text-sm font-medium link">
            Home
          </NavLink>
          <NavLink href="/" className="text-sm font-medium link">
            Jobs
          </NavLink>
          <NavLink href="/" className="text-sm font-medium link">
            Home
          </NavLink>
          <NavLink href="/" className="text-sm font-medium link">
            Home
          </NavLink>
        </ul>
        <div className="w-auto flex justify-between place-items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

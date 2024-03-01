import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { FaRegBell } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-white">
      <nav className="w-full h-auto py-2 md:py-4 flex justify-between place-items-center ">
        <div className="w-[13%] max-md:w-[40%]">
          <h1 className="text-xl font-bold">Hackathon</h1>
        </div>
        <ul className="w-auto hidden md:flex gap-8">
          <Link
            to="/application"
            className="text-sm font-medium text-slate-500 hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="applicants"
            className="text-sm font-medium text-slate-500 hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all duration-300"
          >
            Seek Talent
          </Link>
          <Link
            to="jobs"
            className="text-sm font-medium text-slate-500 hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all duration-300"
          >
            Jobs
          </Link>
          <Link
            to="interviews"
            className="text-sm font-medium text-slate-500 hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all duration-300"
          >
            Interviews
          </Link>
        </ul>
        <div className="w-auto flex justify-between place-items-center gap-5">
          <button className="p-2 bg-slate-100 hover:bg-slate-300 transition-all duration-300 rounded-lg">
            <FaRegBell className="w-5 h-5 text-slate-500 hover:text-black" />
          </button>
          <Select>
            <SelectTrigger className="w-auto">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="viewProfile">View Profile</SelectItem>
              <SelectItem value="logout">Logout</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

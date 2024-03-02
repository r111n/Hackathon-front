import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { GrHomeRounded } from "react-icons/gr";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { BsBriefcase } from "react-icons/bs";
import { GoPeople } from "react-icons/go";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "",
      icon: <GrHomeRounded />,
    },
    {
      name: "Seek Talent",
      link: "applicants",
      icon: <RiSearchEyeLine />,
    },
    {
      name: "Jobs",
      link: "jobs",
      icon: <BsBriefcase />,
    },
    {
      name: "Interviews",
      link: "interviews",
      icon: <GoPeople />,
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center bg-white">
      <nav className="w-full h-auto py-2 md:py-4 flex justify-between place-items-center ">
        <div className="w-[13%] max-md:w-[40%]">
          <h1 className="text-xl font-bold">Hackathon</h1>
        </div>
        <ul className="w-auto hidden md:flex gap-5">
          {links.map((link) => (
            <Link
              to={link.link}
              key={link.name}
              className="flex justify-center place-items-center gap-2 text-sm font-medium text-slate-500 hover:bg-slate-300 hover:text-black px-3 py-2 rounded-lg transition-all duration-300"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="w-auto flex justify-between place-items-center gap-5">
          <button className="group p-2 bg-slate-100 hover:bg-slate-300 transition-all duration-300 rounded-lg">
            <FaRegBell className="w-5 h-5 text-slate-500 group-hover:text-black" />
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

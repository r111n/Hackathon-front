import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import users from "@/users.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PAGE_SIZE = 12; // Number of users per page

const Applicants = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const popularSearches = [
    "Graphic Designer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Full-Stack Developer",
    "Vue Developer",
  ];

  // Filter users based on search query and location
  const filteredUsers = users.filter((user) =>
    user.main_job.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate total number of pages based on filtered results
  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, filteredUsers.length);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="w-full h-full flex justify-center place-items-start py-4 gap-6">
      <div className="flex flex-col w-[70%] h-full gap-6">
        <div className="w-full h-[50%] rounded-2xl px-10 flex flex-col justify-center gap-4 bg-blue-700">
          <h1 className="text-3xl font-regular text-white">
            Find talented people for your company
          </h1>
          <div className="w-full flex place-items-center border p-2 rounded-xl gap-3 bg-slate-200">
            <div className="w-full flex place-items-center bg-white rounded-xl px-3">
              <FiSearch className="text-2xl" />
              <input
                type="text"
                className=" w-full p-3 rounded-xl outline-none bg-transparent text-sm"
                placeholder="Job Title, Talent or keywords"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
            <div className="w-[30%] flex place-items-center bg-white rounded-xl px-3">
              <IoLocationOutline className="text-2xl" />
              <input
                type="text"
                className="p-3 rounded-2xl outline-none bg-transparent text-sm"
                placeholder="Zip code"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <button className="h-full px-6 bg-blue-600 rounded-xl text-white font-bold">
              Search
            </button>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-lg text-white font-regular">Available Jobs</h3>
            <div className="w-full flex gap-2 flex-wrap">
              {popularSearches.map((item) => (
                <h1
                  onClick={() => setSearch(item)}
                  key={item}
                  className="py-2 px-3 border border-slate-200 rounded-full text-xs font-regular text-white font-semibold cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                >
                  {item}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-2xl flex flex-col flex-wrap p-6 gap-4 justify-between ">
          <div className="grid grid-cols-4 gap-2 w-full">
            {filteredUsers.slice(startIndex, endIndex).map((item) => (
              <div
                key={item.id}
                className="w-full h-[200px] bg-slate-100 rounded-lg flex flex-col place-items-center p-3"
              >
                <Avatar className="w-24 h-24">
                  <AvatarImage src={item.img} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3>{item.first_name + " " + item.last_name}</h3>
                <h3 className="text-sm font-bold">{item.main_job}</h3>
                <div className="w-full flex justify-between"></div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applicants;

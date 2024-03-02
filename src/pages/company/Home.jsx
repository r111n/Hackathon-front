import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Home = () => {
  const popularSearches = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Vue Developer",
  ];

  return (
    <section className="w-full h-full flex justify-start place-items-start py-4 gap-6">
      <div className="flex flex-col w-[35%] h-full gap-6">
        <div className="w-full h-[50%] flex flex-col justify-start place-items-center p-3 gap-10 bg-white rounded-2xl">
          <div className="w-full h-[45%] bg-purple-400 rounded-2xl relative">
            <Avatar className="w-24 h-24 absolute bottom-[-30%] left-[35%] border-white border-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex justify-center place-items-center gap-1">
            <h3 className="text-lg font-bold">Sharlen Magalanes</h3>
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-2xl flex p-6">
          <h3 className="text-md font-bold">Upcoming Interviews</h3>
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-6">
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
              />
            </div>
            <div className="w-[30%] flex place-items-center bg-white rounded-xl px-3">
              <IoLocationOutline className="text-2xl" />
              <input
                type="text"
                className="p-3 rounded-2xl outline-none bg-transparent text-sm"
                placeholder="Zip code"
              />
            </div>
            <button className="h-full px-6 bg-blue-600 rounded-xl text-white font-bold">
              Search
            </button>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-lg text-white font-regular">
              Popular Searches
            </h3>
            <div className="w-full flex gap-2 flex-wrap">
              {popularSearches.map((search) => (
                <h1
                  key={search}
                  className="py-2 px-3 border border-slate-200 rounded-full text-xs font-regular text-white font-semibold cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                >
                  {search}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-2xl flex flex-col p-6 gap-3">
          <h3 className="text-md font-bold">Applications</h3>
          <div className="w-full h-full flex flex-col gap-1 bg-red">
            <div className="w-full flex py-6 px-6 h-auto bg-slate-100 rounded-2xl gap-4 place-items-center ">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">Sotware Developer</h3>
                <p className="text-md font-regular">Applicant: Son Anthony</p>
                <p className="text-md font-regular">Mon, 21/10/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

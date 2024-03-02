import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full">
        <div className="flex h-[90px] items-center px-4 shadow-md">
          <h3 className=" font-bold text-xl text-blue-600">Hack-a-job</h3>
        </div>
        <div className="h-[70vh] flex justify-center items-center flex-col gap-2">
          <div>
            <h1 className=" text-slate-800 text-6xl">Simplify finding jobs</h1>
            <h1 className="text-slate-800 text-6xl">
              with <strong className=" text-blue-600">Hack-a-job</strong>
            </h1>
          </div>
          <h3>
            Hack-a-Job simplifies your hiring and finding experience. A website
            that caters the need of everybody
          </h3>
          <div>
            <button
              className="px-7 py-2 bg-blue-600 rounded-md text-slate-50 font-semibold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

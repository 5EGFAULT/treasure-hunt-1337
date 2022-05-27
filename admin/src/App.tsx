import { useState } from "react";
import Team from "./Team";
import Flag from "./Flag";

function App() {
  const [page, setpage] = useState(0);

  return (
    <div className="p-7">
      <div className=" h-24 flex justify-center items-center ">
        <div
          className="h-[44px] w-[150px]  bg-blue-500 cursor-pointer text-white flex justify-center items-center rounded-lg mx-4 hover:bg-blue-700"
          onClick={() => setpage(0)}
        >
          Teams
        </div>
        <div
          className=" h-[44px] w-[150px]  bg-blue-500 cursor-pointer text-white flex justify-center items-center rounded-lg mx-4 hover:bg-blue-700"
          onClick={() => setpage(1)}
        >
          Flags
        </div>
      </div>
      {page === 0 && <Team />}
      {page === 1 && <Flag />}
    </div>
  );
}

export default App;

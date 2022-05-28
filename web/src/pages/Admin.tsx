import { useState } from "react";
import TeamAdmin from "./TeamAdmin";
import FlagAdmin from "./FlagAdmin";

function Admin() {
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
      {page === 0 && <TeamAdmin />}
      {page === 1 && <FlagAdmin />}
    </div>
  );
}

export default Admin;

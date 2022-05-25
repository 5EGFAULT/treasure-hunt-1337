import React from "react";
import FlagCard from "../components/FlagCard";

type Props = {};
const defurl = "https://wallpaperaccess.com/full/532051.jpg";

export default function Team({}: Props) {
  return (
    <div className="w-[100%] p-4   h-full  bg-[linear-gradient(180deg,#017DE9_0%,#017DE9_100px,#F4F4F4_300px)]  ">
      <div
        className={
          " mx-auto  relative w-[100px] h-[100px]  rounded-full border-2  bg-[#D9D9D9] border-white flex justify-center items-center mt-9"
        }
      >
        <img
          src={defurl}
          alt="team img"
          className=" absolute inline object-cover rounded-full h-full w-full"
        />
      </div>
      <div className=" w-full text-center font-bold text-white text-base uppercase mt-2  ">
        LUUUUFY
      </div>
      <div className=" w-full text-center font-normal text-white text-xs uppercase  ">
        3000xp
      </div>

      <h2 className="font-bold text-white text-base uppercase mt-10 w-full">
        Team Players
      </h2>

      <select
        defaultValue="0"
        className="w-full mt-3 border-transparent border-[#4EA4ED] focus:border-[#4EA4ED] text-[#B2E7FE] focus:text-[#4EA4ED]  p-2 pl-3  text-xs font-semibold placeholder:text-[#B2E7FE]   bg-[#E7F8FF]   focus:bg-[#B2E7FE] border-2   rounded-md h-11"
      >
        <option value="0" disabled>
          Filter by
        </option>
        <option value="all">All</option>
        <option value="expired">expired</option>
        <option value="collected">collected</option>
      </select>
      <div className="mt-7 grid grid-cols-3 gap-y-2 w-full content-center justify-items-center	">
        <FlagCard type="active" />
        <FlagCard type="inactive" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="active" />
      </div>
    </div>
  );
}

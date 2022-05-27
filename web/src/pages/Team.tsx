import React from "react";
import FlagCard from "../components/FlagCard";

const defurl = "https://wallpaperaccess.com/full/532051.jpg";

export default function Team() {
  return (
    <div
      style={{ minHeight: window.innerHeight }}
      className="w-[100%] p-4   h-full  bg-[linear-gradient(180deg,#017DE9_0%,#017DE9_100px,#F4F4F4_300px)]  "
    >
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
      <ul className="">
        <li className=""></li>
      </ul>
    </div>
  );
}

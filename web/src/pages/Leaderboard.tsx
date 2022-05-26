import React from "react";
import AvatarTeam from "../components/AvatarTeam";
import TeamTile from "../components/TeamTile";

export default function Leaderboard() {
  return (
    <div
      className="w-[100%] relative  h-full  bg-[#F4F4F4] flex flex-col  items-center overflow-y-scroll"
      style={{ minHeight: window.innerHeight }}
    >
      <div className="bg-[#017DE9] min-h-[180px] w-full"></div>
      <div className="bg-[linear-gradient(180deg,#017DE9_0%,#F4F4F4_100%)] min-h-[190px] w-full"></div>
      <div className="absolute top-0 w-full h-full p-5">
        <div className="relative min-h-[300px] w-full flex justify-evenly items-center">
          <div className="absolute z-10  text-center">
            <div className="mb-5 font-bold text-3xl text-white ">1</div>
            <AvatarTeam type={1} />
            <div className="mt-9 mx-auto font-semibold text-sm text-white max-w-[120px] truncate px-2">
              Team 1asfasdasdasdas
            </div>
            <div className="  font-semibold text-base text-[#017DE9] ">
              45605xp
            </div>
          </div>
          <div className=" absolute mt-4 translate-x-[75%] text-center">
            <div className="mb-5 font-bold text-xl text-white ">2</div>
            <AvatarTeam type={2} />
            <div className="mt-5 font-semibold text-sm text-white max-w-[120px] truncate px-2">
              Team 2
            </div>
            <div className=" font-semibold text-sm text-[#017DE9] ">
              44055xp
            </div>
          </div>
          <div className="absolute mt-4 -translate-x-[75%] text-center">
            <div className="mb-5 font-bold text-lg text-white ">3</div>
            <AvatarTeam type={3} />
            <div className="mt-5 font-semibold text-sm text-white  max-w-[120px] truncate px-2">
              Team 3
            </div>
            <div className=" font-semibold text-sm text-[#017DE9] ">
              10011xp
            </div>
          </div>
        </div>
        <ul className="w-full">
          <TeamTile />
          <TeamTile />
          <TeamTile />
          <TeamTile />
          <TeamTile />
          <TeamTile />
          <TeamTile />
          <TeamTile />
          <TeamTile />
        </ul>
      </div>
    </div>
  );
}

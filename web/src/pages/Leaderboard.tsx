import React from "react";
import TeamTile from "./TeamTile";

type Props = {};

export default function Leaderboard({}: Props) {
  return (
    <div className="w-[100%] relative  h-full  bg-[#F4F4F4] flex flex-col  items-center overflow-y-scroll">
      <div className="bg-[#017DE9] min-h-[180px] w-full">
		  
	  </div>
      <div className="bg-[linear-gradient(180deg,#017DE9_0%,#F4F4F4_100%)] min-h-[190px] w-full"></div>
      <div className="absolute top-0 w-full h-full p-5">
        <div className="min-h-[300px]  w-full "></div>
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

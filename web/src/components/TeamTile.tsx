import React from "react";
import star from "../../assets/startile.svg";
import { HOST_API_pics } from "../config";

const defurl = "https://wallpaperaccess.com/full/532051.jpg";

export default function TeamTile({ team, rank }: any) {
  return (
    <li className="h-20 w-full bg-white my-2 rounded-md p-3 flex justify-between items-center drop-shadow-sm">
      <div className="h-16 w-16 border-2  border-[#017DE9] rounded-full">
        <img
          src={team.picture ? HOST_API_pics + team.picture : defurl}
          alt="team image"
          className="inline object-cover w-full h-full rounded-full"
        />
      </div>
      <div className=" ml-3 text-[#017DE9] text-sm font-semibold flex-grow ">
        {team.name}
      </div>
      <div className="text-sm text-[#017DE9] font-bold">{team.sum}</div>
      <div
        style={{
          backgroundImage: `url(${star})`,
        }}
        className={
          " flex justify-center items-center ml-3 relative h-8 w-8  bg-no-repeat bg-center "
        }
      >
        <span className=" text-xs font-semibold text-white">{rank}</span>
      </div>
    </li>
  );
}

import React, { useEffect, useState } from "react";
import FlagCard from "../components/FlagCard";
import { HOST_API_pics } from "../config";
import { usteam } from "../services/Services";

const defurl = "https://wallpaperaccess.com/full/532051.jpg";

export default function Team() {
  const [team, setteam] = useState<any>({});
  useEffect(() => {
    usteam()
      .then((res) => {
        res.sum = 0;
        for (let i = 0; i < res.TeamFlags.length; i++) {
          const el = res.TeamFlags[i];
          res.sum += el.score;
        }
        console.log(res.User);

        setteam(res);
      })
      .catch((err) => {});
  }, []);

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
          src={team.picture ? HOST_API_pics + team.picture : defurl}
          alt="team img"
          className=" absolute inline object-cover rounded-full h-full w-full"
        />
      </div>
      <div className=" w-full text-center font-bold text-white text-base uppercase mt-2  ">
        {team.name}
      </div>
      <div className=" w-full text-center font-normal text-white text-xs uppercase  ">
        {team.sum}
      </div>

      <h2 className="font-bold text-white text-base uppercase mt-10 w-full">
        Team Players
      </h2>
      <ul className="">
        {team.User &&
          (team.User as Array<any>).map((p) => (
            <li className=" h-16 w-full bg-white my-2 rounded-md p-1 flex justify-between items-center drop-shadow-sm">
              <div className=" ml-3 text-[#017DE9] text-sm font-semibold flex-grow capitalize">
                {p.firstName + " " + p.lastName}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

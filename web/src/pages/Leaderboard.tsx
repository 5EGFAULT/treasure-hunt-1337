import React, { useEffect, useState } from "react";
import AvatarTeam from "../components/AvatarTeam";
import TeamTile from "../components/TeamTile";
import { leaderboard } from "../services/Services";

export default function Leaderboard() {
  const [teams, setteams] = useState<any>([]);
  useEffect(() => {
    leaderboard()
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          const team = res[i];
          team.sum = 0;
          for (let j = 0; j < team.TeamFlags.length; j++) {
            team.sum += team.TeamFlags[j].score;
          }
        }
        res.sort((a: any, b: any) => b.sum - a.sum);
        setteams(res);
      })
      .catch((err) => {
        console.log("err", err);
        setteams([]);
      });
  }, []);

  return (
    <div
      className="w-[100%] relative  h-full  bg-[#F4F4F4] flex flex-col  items-center overflow-y-scroll"
      style={{ minHeight: window.innerHeight }}
    >
      <div className="bg-[#017DE9] min-h-[180px] w-full"></div>
      <div className="bg-[linear-gradient(180deg,#017DE9_0%,#F4F4F4_100%)] min-h-[190px] w-full"></div>
      <div className="absolute top-0 w-full h-full p-5">
        <div className="relative min-h-[300px] w-full flex justify-evenly items-center">
          {teams.length > 0 && (
            <div className="absolute z-10  text-center">
              <div className="mb-5 font-bold text-3xl text-white ">1</div>
              <AvatarTeam picture={teams[0].picture} type={1} />
              <div className="mt-9 mx-auto font-semibold text-sm text-white max-w-[120px] truncate px-2">
                {teams[0].name}
              </div>
              <div className="  font-semibold text-base text-[#017DE9] ">
                {teams[0].sum}
              </div>
            </div>
          )}
          {teams.length > 1 && (
            <div className=" absolute mt-4 translate-x-[75%] text-center">
              <div className="mb-5 font-bold text-xl text-white ">2</div>
              <AvatarTeam picture={teams[1].picture} type={2} />
              <div className="mt-5 font-semibold text-sm text-white max-w-[120px] truncate px-2">
                {teams[1].name}
              </div>
              <div className=" font-semibold text-sm text-[#017DE9] ">
                {teams[1].sum}
              </div>
            </div>
          )}
          {teams.length > 2 && (
            <div className="absolute mt-4 -translate-x-[75%] text-center">
              <div className="mb-5 font-bold text-lg text-white ">3</div>
              <AvatarTeam picture={teams[2].picture} type={3} />
              <div className="mt-5 font-semibold text-sm text-white  max-w-[120px] truncate px-2">
                {teams[2].name}
              </div>
              <div className=" font-semibold text-sm text-[#017DE9] ">
                {teams[2].sum}
              </div>
            </div>
          )}
        </div>
        {teams.length > 3 && (
          <ul className="w-full">
            {teams.slice(3).map((team: any, index: number) => {
              return <TeamTile key={index} team={team} rank={index + 4} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

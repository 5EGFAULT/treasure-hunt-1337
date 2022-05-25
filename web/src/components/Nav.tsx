import React from "react";
import leaderoff from "../../assets/leadericooff.svg";
import leaderon from "../../assets/leadericoon.svg";
import flagoff from "../../assets/flagiconoff.svg";
import flagon from "../../assets/flagiconon.svg";
import settingoff from "../../assets/settingoff.svg";
import settingon from "../../assets/settingon.svg";
import teamoff from "../../assets/profileoff.svg";
import teamon from "../../assets/profileon.svg";
import plus from "../../assets/plus.svg";

export default function Nav() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 flex justify-around items-center  rounded-xl bottom-5  bg-white w-[90%] h-[50px] shadow-sm bg-opacity-[.85]">
      <img src={leaderoff} alt="icon" className="w-[24px] h-[24px] " />
      <img src={flagoff} alt="icon" className="w-[24px] h-[24px] " />
      <div className=" bg-[#056CF2] w-[40px] h-[40px] flex justify-center items-center rounded-full">
        <img src={plus} alt="icon" className="w-[16px] h-[16px] " />
      </div>
      <img src={teamoff} alt="icon" className="w-[24px] h-[24px] " />
      <img src={settingoff} alt="icon" className="w-[24px] h-[24px] " />
    </div>
  );
}

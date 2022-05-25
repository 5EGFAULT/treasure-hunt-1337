import React from "react";
import flagimg from "../../assets/flag.png";
type Props = {
  type: "expired" | "active" | "inactive";
};

export default function ({ type }: Props) {
  return (
    <div
      className={(type == "expired" ? "  " : " opacity-50 ") + "  w-[100px]  "}
    >
      <img src={flagimg} alt="flag image " />
      <div className="w-full -mt-1 text-center uppercase  text-xl [font-family:'Pirata_One']">
        flag 1
      </div>
      <div className=" text-[#017DE9] text-center w-full text-xs font-medium">
        x3
      </div>
    </div>
  );
}

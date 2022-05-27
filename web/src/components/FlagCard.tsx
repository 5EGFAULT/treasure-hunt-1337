import React from "react";
import flagimg from "../../assets/flag.png";
type Props = {
  type: "expired" | "active" | "inactive";
  flag: any;
};

export default function ({ type, flag }: Props) {
  return (
    <div
      className={(type == "expired" ? "  " : " opacity-50 ") + "  w-[100px]  "}
    >
      <img src={flagimg} alt="flag image " />
      <div className="w-full -mt-1 text-center uppercase  text-xl [font-family:'Pirata_One']">
        {flag.name}
      </div>
      <div className=" text-[#017DE9] text-center w-full text-xs font-medium">
        x{flag.sum}
      </div>
    </div>
  );
}

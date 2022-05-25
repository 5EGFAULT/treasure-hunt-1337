import React from "react";
import gold from "../../assets/gold.svg";
import silver from "../../assets/silver.svg";
import bronze from "../../assets/bronze.svg";
type Props = {
  type: 1 | 2 | 3;
};
const defurl = "https://wallpaperaccess.com/full/532051.jpg";

export default function ({ type }: Props) {
  return (
    <div
      className={
        (type == 1 ? " w-[150px] h-[150px]  " : " w-[120px] h-[120px]  ") +
        " relative "
      }
    >
      <img
        src={defurl}
        alt="team image"
        className="inline object-cover rounded-full h-full border-4 border-[#FFFFFF] drop-shadow-lg"
      />
      <img
        src={type == 1 ? gold : type == 2 ? silver : bronze}
        alt=" star "
        className={
          "absolute -bottom-0 left-1/2   translate-y-1/2	-translate-x-1/2  bg-no-repeat bg-center" +
          (type == 1
            ? "h-[64px] w-[64px]"
            : type == 2
            ? "h-[38px] w-[38px]"
            : "h-[30px] w-[30px]")
        }
      />
    </div>
  );
}

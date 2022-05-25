import React from "react";
import FlagCard from "../components/FlagCard";

type Props = {};

export default function ListFlags({}: Props) {
  return (
    <div
      style={{ minHeight: window.innerHeight }}
      className="w-[100%]   h-full  bg-[linear-gradient(180deg,#017DE9_0%,#017DE9_100px,#F4F4F4_300px)]  flex flex-col  items-center"
    >
      <h1
        className="
	 text-white font-bold text-base uppercase 
	 mt-5
	  "
      >
        List of Flags
      </h1>

      <div className="mt-7 grid grid-cols-3 gap-y-2 w-full content-center justify-items-center	">
        <FlagCard type="active" />
        <FlagCard type="inactive" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="expired" />
        <FlagCard type="active" />
        <FlagCard type="active" />
      </div>
    </div>
  );
}

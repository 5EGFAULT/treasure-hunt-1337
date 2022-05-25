import React from "react";

type Props = {};

export default function TeamUpdate({}: Props) {
  return (
    <div className="w-[100%]   h-full  bg-[#017DE9] p-5 flex flex-col  items-center">
      <label className="w-[200px] h-[200px] bg-gray-400 rounded-full border-2 border-white">
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}

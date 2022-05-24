import React, { useState } from "react";
import Pass from "../../assets/pass.png";

type Props = {
  type: string;
  label: string;
  hint: string;
  error: boolean;
  onChange: (value: string) => void;
  seterror: (value: string | null) => void;
};

export default function TextFeild({
  type,
  label,
  hint,
  error,
  onChange,
  seterror,
}: Props) {
  const [isSec, setisSec] = useState(true);

  function handelIsSec() {
    setisSec(!isSec);
  }
  return (
    <div className="w-full">
      <label className="w-full text-[#4EA4ED] focus-within:text-[#B2E7FE] relative">
        <span className="text-xs font-semibold ">{label}</span>
        <input
          type={type}
          onChange={(e) => {
            seterror(null);
            onChange(e.target.value);
          }}
          className={
            (error
              ? " border-[#FF3A3A] focus:border-[#FF3A3A] text-[#FF3A3A] focus:text-[#FF3A3A]"
              : " border-transparent border-[#4EA4ED] focus:border-[#4EA4ED] text-[#B2E7FE] focus:text-[#4EA4ED]") +
            " w-full text-xs font-semibold placeholder:text-[#B2E7FE]   bg-[#E7F8FF]   focus:bg-[#B2E7FE] border-2   rounded-md h-11 "
          }
          placeholder={hint}
        />
        {type == "password" && (
          <img
            src={Pass}
            alt="Password"
            className={
              isSec
                ? "absolute w-[15px] top-[36px] right-5 opacity-70"
                : "absolute w-[15px] top-[36px] right-5 opacity-20"
            }
            onClick={handelIsSec}
          />
        )}
      </label>
    </div>
  );
}

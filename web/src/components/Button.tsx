import React from "react";

type Props = {
  disabled?: boolean;
};

export default function Button({ disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={
        (disabled ? " bg-[#4EA4ED] text-white  " : " bg-white text-black  ") +
        " w-full h-11 font-semibold  rounded-lg text-xs select-none"
      }
    >
      Login
    </button>
  );
}

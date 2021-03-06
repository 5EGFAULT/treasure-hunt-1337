import React, { useEffect, useState } from "react";
import FlagCard from "../components/FlagCard";
import { flags } from "../services/Services";

export default function ListFlags() {
  const [sflags, setflags] = useState<any>([]);
  useEffect(() => {
    flags()
      .then((res: any) => {
        for (let i = 0; i < res.length; i++) {
          const flag = res[i];
          flag.sum = flag._count.TeamFlags;
        }
        setflags(res);
      })
      .catch((err: any) => {
        console.log("err", err);
        setflags([]);
      });
  }, []);

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
        {sflags.map((flag: any, idx: any) => (
          <FlagCard key={idx} type="expired" flag={flag} />
        ))}
      </div>
    </div>
  );
}

import React, { FormEvent, useState } from "react";
import upload from "../../assets/upload.svg";
import Button from "../components/Button";
import TextFeild from "../components/TextFeild";

type Props = {};

export default function TeamUpdate() {
  const [name, setname] = useState("");
  const [file, setfile] = useState<File | null>(null);
  const [filevalue, setfilevalue] = useState<any | null>(null);
  const [error, seterror] = useState<string | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    seterror("Please fill in all fields");
  };
  return (
    <form
      className="w-[100%]   h-full  bg-[linear-gradient(180deg,#017DE9_0%,#017DE9_60%,#F4F4F4_100%)] p-5 flex flex-col  items-center"
      onSubmit={submit}
    >
      <label
        className={
          " relative w-[200px] h-[200px]  rounded-full border-2  bg-[#D9D9D9] border-white flex justify-center items-center mt-9"
        }
      >
        <img src={upload} alt="upload icon" className="w-14" />
        {file && filevalue && (
          <img
            src={filevalue}
            alt="team img"
            className=" absolute inline object-cover rounded-full h-full w-full"
          />
        )}
        <input
          type="file"
          id="image_team"
          className="hidden"
          onChange={(e) => {
            setfile(e.target.files ? e.target.files[0] : null);
            if (e.target.files && e.target.files.length) {
              var fr = new FileReader();
              fr.onload = function () {
                setfilevalue(fr.result);
              };
              fr.readAsDataURL(e.target.files[0]);
            }
          }}
        />
      </label>
      <label
        htmlFor="image_team"
        className="font-bold text-white text-lg capitalize mt-3  "
      >
        Upload your team’s image
      </label>

      <div className=" mb-5 mt-10 w-full">
        <TextFeild
          label="Team Name"
          hint="Enter your team name to change it"
          seterror={seterror}
          type="text"
          onChange={setname}
          error={false}
        />
      </div>
      {error && (
        <div className="text-[#FF3A3A] text-xs w-full font-semibold mb-4  ">
          {error}
        </div>
      )}
      <Button text="Submit" />
    </form>
  );
}

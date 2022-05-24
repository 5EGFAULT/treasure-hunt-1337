import React, { useState } from "react";
import homelogo from "../../assets/home logo.svg";
import Button from "../components/Button";
import TextFeild from "../components/TextFeild";
export default function Login() {
  const [teamname, setTeamname] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen bg-[#017DE9] px-5 py-28 flex flex-col  items-center">
      <img
        src={homelogo}
        alt="HOme LOGO 1337"
        className="w-[60%] max-w-[250px]"
      />
      <form action="" className="w-full">
        <div className="mb-3">
          <TextFeild
            onChange={setTeamname}
            hint="Enter your team’s name"
            label="Team name"
            error={true}
            type="text"
          />
          <TextFeild
            onChange={setPassword}
            hint="Enter your password"
            label="Password"
            error={true}
            type="password"
          />
        </div>

        <Button disabled={!(teamname.length && password.length)} />
      </form>
    </div>
  );
}

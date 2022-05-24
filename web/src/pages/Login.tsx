import React from "react";
import homelogo from "../../assets/home logo.svg";
import Button from "../components/Button";
import TextFeild from "../components/TextFeild";
export default function Login() {
  return (
    <div className="w-screen h-screen bg-[#017DE9] px-5 py-28 flex flex-col  items-center">
      <img
        src={homelogo}
        alt="HOme LOGO 1337"
        className="w-[60%] max-w-[250px]"
      />
      <form action="" className="w-full">
        <TextFeild
          hint="Enter your team’s name"
          label="Team name"
          error="Invalid team name"
          type="text"
        />
        <TextFeild
          hint="Enter your password"
          label="Password"
          error="Check your password"
          type="password"
        />
		<Button/>
      </form>
    </div>
  );
}

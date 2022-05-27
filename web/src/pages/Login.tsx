import React, { FormEvent, FormEventHandler, useState } from "react";
import homelogo from "../../assets/home logo.svg";
import logo1337 from "../../assets/1337.svg";
import Button from "../components/Button";
import TextFeild from "../components/TextFeild";
import { useAuth } from "../auth/auth";
export default function Login() {
  const [teamname, setTeamname] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrormessage] = useState<string | null>(null);
  let auth = useAuth();
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (teamname.length < 1 || password.length < 1) {
      setErrormessage("Please fill in all fields");
      return;
    }
    auth
      .login({ name: teamname, password: password })
      .then((res) => {
        if (!auth.team) {
          setErrormessage("Wrong teamname or password");
        }
      })
      .catch(() => {
        setErrormessage("Wrong teamname or password");
      });
  };
  return (
    <div
      className="w-[100%] bg-[#017DE9] p-5 flex flex-col  items-center"
      style={{ minHeight: window.innerHeight }}
    >
      <img
        src={homelogo}
        alt="HOme LOGO 1337"
        className="w-[60%] max-w-[250px] my-20"
      />
      <form action="" className="w-full  " onSubmit={submit}>
        <div className="mb-3">
          <TextFeild
            seterror={setErrormessage}
            onChange={setTeamname}
            hint="Enter your team’s name"
            label="Team name"
            error={errormessage != null}
            type="text"
          />
          <TextFeild
            seterror={setErrormessage}
            onChange={setPassword}
            hint="Enter your password"
            label="Password"
            error={errormessage != null}
            type="password"
          />
        </div>
        {errormessage && (
          <p className="text-[#FF3A3A] text-xs font-semibold mb-4  ">
            {errormessage}
          </p>
        )}
        <Button text="Login" disabled={!(teamname.length && password.length)} />
      </form>
      <div className=" mt-auto">
        <img src={logo1337} alt="1337 logo" />
      </div>
    </div>
  );
}

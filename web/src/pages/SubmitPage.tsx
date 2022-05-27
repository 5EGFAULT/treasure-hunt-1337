import React, { FormEvent, useState } from "react";
import Button from "../components/Button";
import TextFeild from "../components/TextFeild";
import { submitsecret } from "../services/Services";

type Props = {};

export default function SubmitPage({}: Props) {
  const [text, settext] = useState<string | null>(null);
  const [error, seterror] = useState<string | null>(null);
  const [modal, setmodal] = useState<string | null>(null);
  const [hint, sethint] = useState<string | null>(null);
  const submit = (e: any) => {
    e.preventDefault();
    if (text === null) {
      seterror("enter text");
      e.target.reset();
      return;
    }
    //submitsecret
    let secret = text.toUpperCase();
    secret = secret.replace(/\s/g, "");
    console.log(secret);
    if (secret === "") {
      e.target.reset();
      seterror("enter text");
      return;
    }
    submitsecret(secret)
      .then((res) => {
        if (res.status === 200) {
          sethint(res.data.hint);
          setmodal(res.data.hint);
          settext(null);
          e.target.reset();
        } else {
          alert("error");
          e.target.reset();
          settext(null);
          seterror(" Wrong hint ");
        }
      })
      .catch((err) => {
        settext(null);
        seterror(" Error hint ");
      });
  };
  return (
    <form
      className="w-[100%]    h-full  bg-[linear-gradient(180deg,#017DE9_0%,#017DE9_60%,#F4F4F4_100%)] p-5 flex flex-col justify-center items-center"
      onSubmit={submit}
      style={{ minHeight: window.innerHeight }}
    >
      <TextFeild
        hint="Enter your  Answer"
        error={!!error}
        label="Secret"
        onChange={settext}
        type="text"
        seterror={seterror}
      />

      <div className="text-[#FF3A3A] text-xs w-full font-semibold my-4  ">
        {error}
      </div>

      <Button text="Submit Secret" />
      <div
        className={
          (modal ? " flex " : "hidden ") +
          " absolute w-full h-full z-30 justify-center items-center  flex-col "
        }
        onClick={() => setmodal(null)}
      >
        <div className=" min-w-[80%]  rounded-lg text-center text-white p-5 capitalize min-h-[250px] bg-green-500 shadow-lg">
          <div className="my-6">Correct Hint</div>
          <div className="">{hint || "No hint"}</div>
        </div>
      </div>
    </form>
  );
}

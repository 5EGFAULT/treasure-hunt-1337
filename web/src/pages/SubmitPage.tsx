import React, { FormEvent, useState } from "react";
import Button from "../components/Button";
import TextFeild from "../components/TextFeild";

type Props = {};

export default function SubmitPage({}: Props) {
  const [text, settext] = useState<string | null>(null);
  const [error, seterror] = useState<string | null>(null);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    settext(null);
    seterror(" invalid hint ");
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
    </form>
  );
}

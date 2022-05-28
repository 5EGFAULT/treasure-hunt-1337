import axios from "axios";
import React, { useState } from "react";
import { HOST_API } from "../../../admin/src/config";

type Props = {};

export default function FlagAdmin({}: Props) {
  const [formdata, setformdata] = useState<any>({});

  const submit = (e: any) => {
    e.preventDefault();
    //console.log(formdata);
    let secret = formdata.secret?.toUpperCase();
    secret = secret?.replace(/\s/g, "");
    formdata.secret = secret;

    if (
      formdata.secret &&
      formdata.name &&
      formdata.bounty &&
      formdata.max_collectors
      //  formdata.hint &&
      //  formdata.place
    ) {
      axios
        .post(HOST_API + "/admin/flag", formdata, { withCredentials: true })
        .then((res) => {
          e.target.reset();
          setformdata({});
        })
        .catch((err) => {
          alert("error occured");
        });
    } else {
      alert("Please fill all the fields ");
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="flex justify-evenly">
        <label className="w-[40%]">
          <div className="capitalize">Flag Name</div>
          <input
            type="text"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
          />
        </label>
        <label className="w-[40%]">
          <div className="capitalize">secret</div>
          <input
            type="text"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) =>
              setformdata({ ...formdata, secret: e.target.value })
            }
          />
        </label>
      </div>
      <div className="my-1 flex justify-evenly">
        <label className="w-[40%]">
          <div className="capitalize">bounty</div>
          <input
            type="number"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) =>
              setformdata({ ...formdata, bounty: e.target.value })
            }
          />
        </label>
        <label className="w-[40%]">
          <div className="capitalize">max_collectors</div>
          <input
            type="number"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) =>
              setformdata({ ...formdata, max_collectors: e.target.value })
            }
          />
        </label>
      </div>
      <div className="my-1 flex justify-evenly">
        <label className="w-[40%]">
          <div className="capitalize">hint</div>
          <input
            type="text"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) => setformdata({ ...formdata, hint: e.target.value })}
          />
        </label>
        <label className="w-[40%]">
          <div className="capitalize">place</div>
          <input
            type="text"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) =>
              setformdata({ ...formdata, place: e.target.value })
            }
          />
        </label>
      </div>
      <label className="w-[150px] mx-auto flex items-center">
        <input
          type="checkbox"
          className="  h-[44px]  bg-blue-500 cursor-pointer text-white flex justify-center items-center rounded-lg mx-4 hover:bg-blue-700"
          onChange={(e) =>
            setformdata({ ...formdata, is_road: e.target.checked })
          }
        />
        <span>Is Road</span>
      </label>
      <button
        type="submit"
        className="mx-auto my-3 h-[44px] w-[150px]  bg-blue-500 cursor-pointer text-white flex justify-center items-center rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

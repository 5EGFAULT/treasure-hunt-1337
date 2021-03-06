import axios from "axios";
import React, { useState } from "react";
import { HOST_API } from "../config";

type Props = {};

export default function TeamAdmin({}: Props) {
  const [formdata, setformdata] = useState<any>({
    password: null,
    name: null,
    users: [
      {
        firstName: null,
        lastName: null,
      },
    ],
  });

  const submit = (e: any) => {
    e.preventDefault();
    let valid = true;
    for (let i = 0; i < formdata.users.length; i++) {
      const el = formdata.users[i];
      if (!el.firstName || !el.lastName) {
        valid = false;
        break;
      }
    }

    if (formdata.password && formdata.name && valid) {
      axios
        .post(
          HOST_API + "/admin/team",

          formdata,

          { withCredentials: true }
        )
        .then((res) => {
          e.target.reset();
          setformdata({
            users: [
              {
                firstName: null,
                lastName: null,
              },
            ],
          });
        })
        .catch((err) => {
          alert("error occured");
        });
      console.log(formdata);
    } else {
      alert("Please fill all the fields ");
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="flex justify-evenly">
        <label className="w-[40%]">
          <div className="capitalize">Team Name</div>
          <input
            type="text"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
          />
        </label>
        <label className="w-[40%]">
          <div className="capitalize">password</div>
          <input
            type="text"
            className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }
          />
        </label>
      </div>
      <div className="my-3">
        {formdata.users.map((user: any, index: number) => (
          <div key={index} className="flex justify-evenly">
            <label className="w-[40%]">
              <div className="capitalize">first name</div>
              <input
                type="text"
                className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
                onChange={(e) => {
                  const users = formdata.users;
                  users[index].firstName = e.target.value;
                  setformdata({ ...formdata, users });
                }}
              />
            </label>
            <label className="w-[40%]">
              <div className="">last name</div>
              <input
                type="text"
                className="w-[100%]  h-[44px]  bg-white border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-base"
                onChange={(e) => {
                  const users = formdata.users;
                  users[index].lastName = e.target.value;
                  setformdata({ ...formdata, users });
                }}
              />
            </label>
          </div>
        ))}
      </div>
      {formdata.users.length < 6 && (
        <div
          onClick={() => {
            setformdata({
              ...formdata,
              users: [
                ...formdata.users,
                { firstName: null, lastName: null, username: null },
              ],
            });
          }}
          className="mx-auto my-3 h-[44px] w-[150px]  bg-blue-500 cursor-pointer text-white flex justify-center items-center rounded-lg hover:bg-blue-700"
        >
          Add Users
        </div>
      )}
      <button
        type="submit"
        className="mx-auto my-3 h-[44px] w-[150px]  bg-blue-500 cursor-pointer text-white flex justify-center items-center rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

import React from "react";
import { HiClock } from "react-icons/hi";

const SetReminder = () => {
  return (
    <div>
      <h1>Reminder</h1>
      <div className="h-24 w-full">
        <div className="flex h-8 items-center border-2 pl-2 rounded-md">
          <HiClock className="inline" />
          <input
            type="email"
            placeholder="Enter email to add for a reminder"
            className="outline-none w-full pl-4"
          />
          <button className="w-2/12 rounded-md bg-blue-500 text-white h-full">
            Add
          </button>
        </div>
      </div>
      <h1>Reminder Note</h1>
      <textarea
        placeholder="Enter reminder note"
        className="w-full outline-none border-2 resize-none h-24 px-2 py-1"
      ></textarea>
    </div>
  );
};

export default SetReminder;

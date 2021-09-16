import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const ScheduleMeeting = () => {
  return (
    <div>
      <div>
        <h1>Meeting</h1>
        <div className="h-24 w-8/12">
          <div className="flex h-8 items-center border-2 pl-2 rounded-md">
            <HiMail className="inline text-lg" />
            <input
              type="email"
              placeholder="Enter email to add for a meeting"
              className="outline-none w-full pl-4"
            />
            <button className="w-2/12 rounded-md bg-blue-500 text-white h-full">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="w-8/12">
        <label className="block">Location</label>
        <div className="flex h-8 items-center border-2 pl-2 rounded-md my-2">
          <HiLocationMarker className="inline text-lg" />
          <input
            type="url"
            placeholder="Add a location"
            className="outline-none w-full pl-4"
          />
          <button className="w-2/12 rounded-md bg-blue-500 text-white h-full">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;

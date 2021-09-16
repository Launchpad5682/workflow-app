import React from "react";

function ActionsOptions() {
  return (
    <div>
      <div className="h-10 w-64 justify-center items-center flex border-2 border-gray-500 rounded-lg hover:bg-green-100 px-2 my-3">
        Send an email
      </div>
      <div className="h-10 w-64 justify-center items-center flex border-2 border-gray-500 rounded-lg hover:bg-red-100 px-2 my-3">
        Schedule a meeting
      </div>
      <div className="h-10 w-64 justify-center items-center flex border-2 border-gray-500 rounded-lg hover:bg-yellow-100 px-2 my-3">
        Set a reminder
      </div>
    </div>
  );
}

export default ActionsOptions;

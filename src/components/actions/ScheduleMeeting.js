import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { useModalOverlayContext } from "../../context/ModalOverlayContext";

const ScheduleMeeting = () => {
  const { setScheduleMeetingOverlay } = useModalOverlayContext();

  const closeModal = (event) => {
    event.preventDefault();
    setScheduleMeetingOverlay(false);
  };

  const addMeetingAction = () => {};

  return (
    <div>
      <div>
        <h1>Meeting</h1>
        <div className="h-24 w-full">
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
      <div className="w-full">
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
      <div>
        <label className="block">Deadline</label>
        <input type="datetime-local" />
      </div>
      <div className="mt-9">
        <button
          onClick={addMeetingAction}
          className="w-24 h-10 rounded-lg bg-green-600 text-white font-bold"
        >
          SUBMIT
        </button>
        <button
          onClick={closeModal}
          className="w-24 h-10 rounded-lg bg-red-600 text-white font-bold ml-5"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default ScheduleMeeting;

import React from "react";
import { useModalOverlayContext } from "../context/ModalOverlayContext";
import { HiOutlineX } from "react-icons/hi";

const SideModal = ({ children, action }) => {
  const { setSendEmailOverlay, setScheduleMeetingOverlay, setReminderOverlay } =
    useModalOverlayContext();

  const closeModal = (event) => {
    event.preventDefault();
    if (action === "sendEmail") setSendEmailOverlay(false);
    else if (action === "scheduleMeeting") setScheduleMeetingOverlay(false);
    else setReminderOverlay(false);
  };

  const addAction = (event) => {
    event.preventDefault();
  };

  return (
    <div className="inset-0 fixed bg-gray-900 bg-opacity-40 z-10">
      <div className="h-full w-4/12 bg-white float-right px-10 flex-col font-serif pt-4">
        <div className="flex items-center justify-between">
          <text className="text-2xl">Add an Action</text>
          <HiOutlineX
            className="text-4xl hover:bg-gray-200 rounded-full p-1"
            onClick={closeModal}
          />
        </div>
        {children ? children : null}
        <div className="mt-9">
          <button
            onClick={addAction}
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
    </div>
  );
};

export default SideModal;

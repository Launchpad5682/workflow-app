import React from "react";
import { HiClock } from "react-icons/hi";
import { useModalOverlayContext } from "../../context/ModalOverlayContext";

const SetReminder = () => {
  const { setReminderOverlay } = useModalOverlayContext();

  const closeModal = (event) => {
    event.preventDefault();
    setReminderOverlay(false);
  };

  const addSetReminderAction = () => {};

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
      <div>
        <label className="block">Deadline</label>
        <input type="datetime-local" />
      </div>
      <div className="mt-9">
        <button
          onClick={addSetReminderAction}
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

export default SetReminder;

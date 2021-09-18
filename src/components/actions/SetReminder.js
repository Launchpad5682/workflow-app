import React, { useRef, useState } from "react";
import { HiClock } from "react-icons/hi";
import { useModalOverlayContext } from "../../context/ModalOverlayContext";
import { useWorkflowContext } from "../../context/WorkflowContext";
import { idGenerator } from "../../helper/idGenerator";

const SetReminder = () => {
  const { setReminderOverlay } = useModalOverlayContext();
  const { actions, setActions } = useWorkflowContext();
  const [emails, setEmails] = useState([]);
  const emailRef = useRef(null);
  const noteRef = useRef(null);
  const deadlineRef = useRef(null);

  const closeModal = (event) => {
    event.preventDefault();
    setReminderOverlay(false);
  };

  const addSetReminderAction = (event) => {
    event.preventDefault();
    const id = idGenerator();
    const emailList = emails;
    const reminder = noteRef.current.value;
    const deadline = deadlineRef.current.value;
    noteRef.current.value = null;
    deadlineRef.current.value = null;

    const action = {
      id: id,
      label: "Reminder",
      emailList: emailList,
      reminder: reminder,
      deadline: deadline,
    };

    setActions([...actions, action]);
    setReminderOverlay(false);
  };

  const addMail = (event) => {
    event.preventDefault();
    setEmails([...emails, emailRef.current.value]);
    emailRef.current.value = null;
  };

  return (
    <form onSubmit={addSetReminderAction}>
      <h1>Reminder</h1>
      <div className="h-24 w-full">
        <div className="flex h-8 items-center border-2 pl-2 rounded-md">
          <HiClock className="inline text-lg" />
          <input
            type="email"
            placeholder="Enter email to add for a reminder"
            className="outline-none w-full pl-4"
            ref={emailRef}
          />
          <button
            className="w-2/12 rounded-md bg-blue-500 text-white h-full"
            onClick={addMail}
          >
            Add
          </button>
        </div>
        {emails ? emails.map((email) => <span>{email}</span>) : null}
      </div>
      <h1>Reminder Note</h1>
      <textarea
        placeholder="Enter reminder note"
        className="w-full outline-none border-2 resize-none h-24 px-2 py-1"
        ref={noteRef}
      />
      <div>
        <label className="block">Deadline</label>
        <input type="datetime-local" ref={deadlineRef} />
      </div>
      <div className="mt-9">
        <button
          type="submit"
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
    </form>
  );
};

export default SetReminder;

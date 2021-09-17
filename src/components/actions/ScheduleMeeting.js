import React, { useState, useRef } from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { useModalOverlayContext } from "../../context/ModalOverlayContext";
import { useWorkflowContext } from "../../context/WorkflowContext";
import { idGenerator } from "../../helper/idGenerator";

const ScheduleMeeting = () => {
  const { setScheduleMeetingOverlay } = useModalOverlayContext();
  const { actions, setActions } = useWorkflowContext();
  const [emails, setEmails] = useState([]);
  const emailRef = useRef(null);
  const locationRef = useRef(null);
  const deadlineRef = useRef(null);

  const closeModal = (event) => {
    event.preventDefault();
    setScheduleMeetingOverlay(false);
  };

  const addMeetingAction = (event) => {
    event.preventDefault();
    const id = idGenerator();
    const emailList = emails;
    const location = locationRef.current.value;
    const deadline = deadlineRef.current.value;
    locationRef.current.value = null;
    deadlineRef.current.value = null;

    const action = {
      id: id,
      label: "Schedule Meeting",
      emailList: emailList,
      location: location,
      deadline: deadline,
    };
    
    setActions([...actions, action]);
    setScheduleMeetingOverlay(false);
  };

  const addMail = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    setEmails([...emails, emailRef.current.value]);
    emailRef.current.value = null;
  };

  return (
    <form onSubmit={addMeetingAction}>
      <div>
        <h1>Meeting</h1>
        <div className="h-24 w-full">
          <div className="flex h-8 items-center border-2 pl-2 rounded-md">
            <HiMail className="inline text-lg" />
            <input
              type="email"
              placeholder="Enter email to add for a meeting"
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
      </div>
      <div className="w-full">
        <label className="block">Location</label>
        <div className="flex h-8 items-center border-2 pl-2 rounded-md my-2">
          <HiLocationMarker className="inline text-lg" />
          <input
            type="url"
            placeholder="Add a location"
            className="outline-none w-full pl-4"
            ref={locationRef}
          />
        </div>
      </div>
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

export default ScheduleMeeting;

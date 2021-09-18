import React, { useEffect, useRef } from "react";
import { HiAtSymbol, HiDocumentText, HiOutlineBookOpen } from "react-icons/hi";
import { useModalOverlayContext } from "../../context/ModalOverlayContext";
import { useWorkflowContext } from "../../context/WorkflowContext";
import { idGenerator } from "../../helper/idGenerator";

const SendEmail = () => {
  const { setSendEmailOverlay } = useModalOverlayContext();
  const { actions, setActions, editMode, setEditMode } = useWorkflowContext();

  const closeModal = (event) => {
    event.preventDefault();
    setSendEmailOverlay(false);
    if (editMode) setEditMode(null);
  };

  const toEmailRef = useRef(null);
  const fromEmailRef = useRef(null);
  const subjectRef = useRef(null);
  const bodyRef = useRef(null);
  const deadlineRef = useRef(null);

  const addSendEmailAction = (event) => {
    event.preventDefault();
    //console.log(toEmailRef.current.value);
    const id = editMode ? editMode.id : idGenerator();
    const toEmail = toEmailRef.current.value;
    const fromEmail = fromEmailRef.current.value;
    const subject = subjectRef.current.value;
    const body = bodyRef.current.value;
    const deadline = deadlineRef.current.value;

    const action = {
      id: id,
      label: "Send Mail",
      toEmail: toEmail,
      fromEmail: fromEmail,
      subject: subject,
      body: body,
      deadline: deadline,
    };

    toEmailRef.current.value = null;
    fromEmailRef.current.value = null;
    subjectRef.current.value = null;
    bodyRef.current.value = null;
    deadlineRef.current.value = null;
    if (editMode === null) {
      setActions([...actions, action]);
      setSendEmailOverlay(false);
    } else {
      // edit mode
      const actionIndex = actions.findIndex(
        (action) => action.id === editMode.id
      );

      const tempActions = actions;
      tempActions[actionIndex] = action;
      setActions([...tempActions]);
      setEditMode(null);
      setSendEmailOverlay(false);
    }
    // console.log(action);
  };

  useEffect(() => {
    console.log("send email in edit mode", editMode);
    if (editMode) {
      const action = actions.filter((action) => action.id === editMode.id)[0];
      toEmailRef.current.value = action.toEmail;
      fromEmailRef.current.value = action.fromEmail;
      subjectRef.current.value = action.subject;
      bodyRef.current.value = action.body;
      deadlineRef.current.value = action.deadline;
    }
  }, [editMode, actions]);

  return (
    <form onSubmit={addSendEmailAction}>
      <text className="text-xl">Email</text>
      <label className="block">To</label>
      <div className="border-2 w-full flex items-center px-2">
        <HiAtSymbol className="inline text-lg" />
        <input
          type="email"
          placeholder="Enter the receiver's mail"
          className="w-full outline-none px-2"
          ref={toEmailRef}
        />
      </div>
      <label className="block">From</label>
      <div className="border-2 w-full flex items-center px-2">
        <HiAtSymbol className="inline text-lg" />
        <input
          type="email"
          placeholder="Enter the sendee's mail"
          className="w-full outline-none px-2"
          ref={fromEmailRef}
        />
      </div>
      <label className="block">Subject</label>
      <div className="border-2 w-full flex h-28 px-2 pt-2">
        <HiDocumentText className="inline text-lg" />
        <textarea
          placeholder="Enter the subject"
          className="w-full outline-none resize-none px-2"
          ref={subjectRef}
        />
      </div>
      <label className="block">Body</label>
      <div className="border-2 w-full flex h-64 px-2 pt-2">
        <HiOutlineBookOpen className="inline text-lg" />
        <textarea
          placeholder="Enter the body here"
          className="w-full outline-none resize-none px-2"
          ref={bodyRef}
        />
      </div>
      <div>
        <label className="block">Deadline</label>
        <input type="datetime-local" ref={deadlineRef} />
      </div>
      <div className="h-full"></div>
      <div className="mt-9">
        <button
          type="submit"
          className="w-24 h-10 rounded-lg bg-green-600 text-white font-bold"
        >
          {editMode ? "EDIT" : "SUBMIT"}
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

export default SendEmail;

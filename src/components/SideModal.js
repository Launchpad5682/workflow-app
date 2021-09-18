import React from "react";
import { useModalOverlayContext } from "../context/ModalOverlayContext";
import { HiOutlineX } from "react-icons/hi";
import { useWorkflowContext } from "../context/WorkflowContext";

const SideModal = ({ children, action }) => {
  const { setSendEmailOverlay, setScheduleMeetingOverlay, setReminderOverlay } =
    useModalOverlayContext();
  const { editMode, setEditMode } = useWorkflowContext();

  const closeModal = (event) => {
    event.preventDefault();
    if (action === "sendEmail") setSendEmailOverlay(false);
    else if (action === "scheduleMeeting") setScheduleMeetingOverlay(false);
    else setReminderOverlay(false);

    if (editMode) setEditMode(null);
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
      </div>
    </div>
  );
};

export default SideModal;

import React from "react";
import { HiAtSymbol, HiDocumentText, HiOutlineBookOpen } from "react-icons/hi";
import { useModalOverlayContext } from "../../context/ModalOverlayContext";

const SendEmail = () => {
  const { setSendEmailOverlay } = useModalOverlayContext();

  const closeModal = (event) => {
    event.preventDefault();
    setSendEmailOverlay(false);
  };

  const addSendEmailAction = () => {};

  return (
    <form>
      <text className="text-xl">Email</text>
      <label className="block">To</label>
      <div className="border-2 w-full flex items-center px-2">
        <HiAtSymbol className="inline text-lg" />
        <input
          type="email"
          placeholder="Enter the receiver's mail"
          className="w-full outline-none px-2"
        />
      </div>
      <label className="block">From</label>
      <div className="border-2 w-full flex items-center px-2">
        <HiAtSymbol className="inline text-lg" />
        <input
          type="email"
          placeholder="Enter the sendee's mail"
          className="w-full outline-none px-2"
        />
      </div>
      <label className="block">Subject</label>
      <div className="border-2 w-full flex h-28 px-2 pt-2">
        <HiDocumentText className="inline text-lg" />
        <textarea
          placeholder="Enter the subject"
          className="w-full outline-none resize-none px-2"
        />
      </div>
      <label className="block">Body</label>
      <div className="border-2 w-full flex h-64 px-2 pt-2">
        <HiOutlineBookOpen className="inline text-lg" />
        <textarea
          placeholder="Enter the body here"
          className="w-full outline-none resize-none px-2"
        />
      </div>
      <div>
        <label className="block">Deadline</label>
        <input type="datetime-local" />
      </div>
      <div className="h-full"></div>
      <div className="mt-9">
        <button
          onClick={addSendEmailAction}
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

export default SendEmail;

import React from "react";
import { useModalOverlayContext } from "../context/ModalOverlayContext";
import { HiOutlineX } from "react-icons/hi";

const SideModal = ({ children }) => {
  const { setModalOverlay } = useModalOverlayContext();

  const closeModal = (event) => {
    event.preventDefault();
    setModalOverlay(false);
  };

  const addAction = (event) => {
    event.preventDefault();
  };

  return (
    <div className="inset-0 fixed bg-gray-900 bg-opacity-40 z-10">
      <div className="h-full w-5/12 bg-white float-right px-10 pt-1 flex-col font-serif">
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

/*          <div className="">
            <button
              onClick={closeModal}
              className="w-24 h-10 rounded-lg bg-red-600 text-white float-right font-bold"
            >
              CANCEL
            </button>
            <button
              onClick={addAction}
              className="w-24 h-10 rounded-lg bg-green-600 text-white float-right mx-4 font-bold"
            >
              SUBMIT
            </button>
          </div> */

import React from "react";
import { HiOutlineX } from "react-icons/hi";

const EmailCard = ({ email, removeEmail }) => {
  return (
    <span className="mx-1 my-1 inline-block border-gray-400 border-2 py-0.5 px-3 rounded-2xl">
      {email}
      <HiOutlineX
        onClick={removeEmail}
        className="ml-2 inline rounded-2xl hover:bg-gray-200 "
      />
    </span>
  );
};

export default EmailCard;

import React from "react";
import { HiAtSymbol, HiDocumentText, HiOutlineBookOpen } from "react-icons/hi";

const SendEmail = () => {
  return (
    <div>
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
    </div>
  );
};

export default SendEmail;

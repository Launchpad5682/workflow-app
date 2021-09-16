import React from "react";

const SideModal = () => {
  return (
    <div className="inset-0 fixed bg-gray-900 bg-opacity-40 z-10">
      <div className="h-full w-8/12 bg-white float-right pl-10 pt-5 flex-col">
        <h1>Add an action</h1>
        <div>
          <h1>Email</h1>
          <form className="">
            <label>To</label>
            <input type="email" placeholder="Enter the receiver's mail"></input>
            <label>From</label>
            <input type="email" placeholder="Enter the sendee's mail"></input>
            <label>Subject</label>
            <input type="text" placeholder="Enter the subject"></input>
            <label>Body</label>
            <textarea placeholder="Enter the body here"></textarea>
          </form>
        </div>
        <div>
          <h1>Meeting</h1>
          <form>
            <input
              type="email"
              placeholder="Enter email to add for a meeting"
            ></input>
            <button>Add</button>
          </form>
        </div>
        <div>
          <h1>Location</h1>
          <form>
            <label>Location</label>
            <input type="url" placeholder="Add a location"></input>
          </form>
        </div>
        <div>
          <h1>Reminder</h1>
          <form>
            <input
              type="email"
              placeholder="Enter email to add for a reminder"
            ></input>
            <button>Add</button>
          </form>
          <h1>Reminder Note</h1>
          <textarea placeholder="Enter reminder note"></textarea>
        </div>
        <div>
          <button>CANCEL</button>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default SideModal;

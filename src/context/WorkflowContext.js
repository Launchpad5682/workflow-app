import { createContext, useContext, useEffect, useState } from "react";

export const WorkflowContext = createContext();

export const useWorkflowContext = () => useContext(WorkflowContext);

export const WorkflowProvider = (props) => {
  // const initialState = [
  //   {
  //     id: "1",
  //     type: "input", // input node
  //     data: { label: "Input Node" },
  //     position: { x: 250, y: 25 },
  //   },
  //   // default node
  //   {
  //     id: "2",
  //     data: { label: <div>Default Node</div> },
  //     position: { x: 100, y: 125 },
  //   },
  //   {
  //     id: "3",
  //     type: "output",
  //     data: { label: "Output Node" },
  //     position: { x: 250, y: 250 },
  //   },
  //   {
  //     id: "4ce3",
  //     data: { label: "Send Email" },
  //     position: { x: 300, y: 300 },
  //   },
  //   { id: "e1-2", source: "1", target: "2", animated: true },
  // ];

  const initialState = [
    {
      id: "5hd4",
      label: "Send Mail",
      toEmail: "test@gmail.com",
      fromEmail: "test2@gmail.com",
      subject: "meeting at 2:50PM",
      body: "Hi Sam, can we have a meeting at 2:50 PM about product feature.",
      deadline: "2021-09-18T14:09",
    },
    {
      id: "bc26",
      label: "Reminder",
      emailList: ["launchpad5682@gmail.com"],
      reminder:
        "We need to arrange 3 meetings in this week regarding product features.",
      deadline: "2021-09-18T14:09",
    },
    {
      id: "bc82",
      label: "Schedule Meeting",
      emailList: ["test@gmail.com", "test2@gmail.com", "test3@gmail.com"],
      location: "https://g.page/Paras-JK-Hospital?share",
      deadline: "2021-09-18T14:09",
    },
  ];

  const [elements, setElements] = useState();
  const [actions, setActions] = useState(initialState);
  // empty then do nothing, when have an object
  // with id and mode then edit and change
  const [editMode, setEditMode] = useState(null);

  useEffect(() => {
    let tempElements = [];
    console.log(actions);
    actions.forEach((action) => {
      const x = Math.floor(Math.random() * 400);
      const y = Math.floor(Math.random() * 400);
      const label = action.label;
      console.log(label);
      if (label === "Send Mail") {
        const id = action.id;
        const ele = {
          id: id,
          type: "default",
          data: {
            label: (
              <div className="text-left">
                <h1 className="text-2xl">{action.label}</h1>
                <div>
                  <span className="font-bold">To: </span> {action.toEmail}{" "}
                  <br />
                  <span className="font-bold">From: </span> {action.fromEmail}{" "}
                  <br />
                  <span className="font-bold">Subject: </span>
                  {action.subject} <br />
                  <span className="font-bold">Deadline: </span>{" "}
                  {action.deadline} <br />
                </div>
              </div>
            ),
          },
          style: { height: "auto", width: "auto", border: "2px solid red" },
          position: { x: x, y: y },
        };
        // console.log(ele);
        tempElements.push(ele);
      } else if (label === "Schedule Meeting") {
        const id = action.id;
        const ele = {
          id: id,
          type: "default",
          data: {
            label: (
              <div className="text-left">
                <h1 className="text-2xl">{action.label}</h1>
                <div>
                  <span className="font-bold block">Participants</span>
                  {action.emailList
                    ? action.emailList.map((email) => (
                        <span className="block mt-2 rounded-2xl pl-2 py-1 bg-green-300">
                          {email}
                        </span>
                      ))
                    : null}
                  <br />
                  <span className="font-bold block">Location: </span>
                  {action.location}
                  <br />
                  <span className="font-bold">Deadline: </span>
                  {action.deadline}
                  <br />
                </div>
              </div>
            ),
          },
          style: { height: "auto", width: "auto", border: "2px solid green" },
          position: { x: x, y: y },
        };
        tempElements.push(ele);
      } else {
        const id = action.id;
        const ele = {
          id: id,
          type: "default",
          data: {
            label: (
              <div className="text-left">
                <h1 className="text-2xl">{action.label}</h1>
                <div>
                  <span className="font-bold block">Participants</span>
                  {action.emailList
                    ? action.emailList.map((email) => (
                        <span className="block mt-2 rounded-2xl pl-2 py-1 bg-yellow-300">
                          {email}
                        </span>
                      ))
                    : null}
                  <br />
                  <span className="font-bold">Reminder: </span>
                  {action.reminder}
                  <br />
                  <span className="font-bold">Deadline: </span>
                  {action.deadline}
                  <br />
                </div>
              </div>
            ),
          },
          style: {
            height: "auto",
            width: "300px",
            border: "2px solid yellow",
          },
          position: { x: x, y: y },
        };
        tempElements.push(ele);
      }
    });
    console.log(tempElements);
    setElements(tempElements);
  }, [actions]);

  const value = {
    elements,
    actions,
    setElements,
    setActions,
    editMode,
    setEditMode,
  };

  return (
    <WorkflowContext.Provider value={value}>
      {props.children}
    </WorkflowContext.Provider>
  );
};

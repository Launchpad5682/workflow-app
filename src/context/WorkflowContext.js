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
      toEmail: "text@gmail.com",
      fromEmail: "launchpad5682@gmail.com",
      subject: "meeting at 2:50PM",
      body: "Hi Sam, can we have a meeting at 2:50 PM about product feature.",
      deadline: "",
    },
    {
      id: "bc26",
      label: "Reminder",
      emailList: ["launchpad5682@gmail.com"],
      reminder:
        "We need to arrange 3 meetings in this week regarding product features.",
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
              <div>
                {action.label}
                <div>
                  To: {action.toEmail} <br />
                  From: {action.fromEmail} <br />
                  Subject: {action.subject} <br />
                  Deadline: {action.deadline} <br />
                </div>
              </div>
            ),
          },
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
              <div>
                {action.label}
                <div>
                  {action.emailList
                    ? action.emailList.map((email) => <span>{email}</span>)
                    : null}
                  Deadline: {action.deadline}
                  <br />
                </div>
              </div>
            ),
          },
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
              <div>
                {action.label}
                <div>
                  {action.emailList
                    ? action.emailList.map((email) => <span>{email}</span>)
                    : null}
                  Reminder: {action.reminder}
                  <br />
                  Deadline: {action.deadline}
                  <br />
                </div>
              </div>
            ),
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

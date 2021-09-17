import { createContext, useContext, useEffect, useState } from "react";

export const WorkflowContext = createContext();

export const useWorkflowContext = () => useContext(WorkflowContext);

export const WorkflowProvider = (props) => {
  const initialState = [
    {
      id: "1",
      type: "input", // input node
      data: { label: "Input Node" },
      position: { x: 250, y: 25 },
    },
    // default node
    {
      id: "2",
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: "3",
      type: "output",
      data: { label: "Output Node" },
      position: { x: 250, y: 250 },
    },
    {
      id: "4ce3",
      data: { label: "Send Email" },
      position: { x: 300, y: 300 },
    },
    { id: "e1-2", source: "1", target: "2", animated: true },
  ];

  const [elements, setElements] = useState(initialState);
  const [actions, setActions] = useState([
    // { id: "4f82", label: "Send Mail", data: <div>Hello</div> },
    // { id: "4f83", label: "Send Mail" },
    {
      id: "5hd4",
      label: "Send Mail",
      toEmail: "text@gmail.com",
      fromEmail: "launchpad5682@gmail.com",
      subject: "meeting at 2:50PM",
      body: "Hi Sam, can we have a meeting at 2:50 PM about product feature.",
      deadline: "",
    },
  ]);

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
      } else {
      }
    });
    console.log(tempElements);
    setElements(tempElements);
  }, [actions]);

  const value = { elements, actions, setElements, setActions };
  return (
    <WorkflowContext.Provider value={value}>
      {props.children}
    </WorkflowContext.Provider>
  );
};

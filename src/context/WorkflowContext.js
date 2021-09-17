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
    { id: "4f82", label: "Send Mail" },
    { id: "4f83", label: "Send Mail" },
  ]);

  useEffect(() => {
    let tempElements = [];
    actions.forEach((action) => {
      const x = Math.floor(Math.random() * 400);
      const y = Math.floor(Math.random() * 400);
      const label = action.label;
      if (label === "Send Mail") {
        const id = action.id;
        const ele = {
          id: id,
          type: "default",
          data: { label: action.label },
          position: { x: x, y: y },
        };
        tempElements.push(ele);
      } else if (label === "Schedule Meeting") {
      } else {
      }
    });

    setElements(tempElements);
  }, [actions]);

  const value = { elements, actions, setElements, setActions };
  return (
    <WorkflowContext.Provider value={value}>
      {props.children}
    </WorkflowContext.Provider>
  );
};

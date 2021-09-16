import { createContext, useContext } from "react";

export const WorkflowContext = createContext();

export const useWorkflowContext = () => useContext(WorkflowContext);

export const WorkflowProvider = (props) => {
  const value = {};
  return (
    <WorkflowContext.Provider value={value}>
      {props.children}
    </WorkflowContext.Provider>
  );
};

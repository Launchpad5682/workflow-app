import "./App.css";
import ReactFlow from "react-flow-renderer";
import { useWorkflowContext } from "./context/WorkflowContext";

function App() {
  const { elements } = useWorkflowContext();

  return (
    <div style={{ height: 500 }}>
      <button>Add Action</button>
      <ReactFlow elements={elements} />
    </div>
  );
}

export default App;

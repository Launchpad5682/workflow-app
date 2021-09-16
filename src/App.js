import "./App.css";
import "./styles/output.css";
import ReactFlow, { addEdge } from "react-flow-renderer";
import { useWorkflowContext } from "./context/WorkflowContext";
import { useModalOverlayContext } from "./context/ModalOverlayContext";
import AddActionModal from "./components/AddActionModal";

function App() {
  const { elements, setElements } = useWorkflowContext();
  const { modalOverlay, setModalOverlay } = useModalOverlayContext();

  const modalSlideInput = (event) => {
    setModalOverlay(!modalOverlay);
  };

  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (event, element) => {
    console.log("click", element);
    setModalOverlay(true);
  };

  return (
    <div className=" h-screen flex-col items-center justify-center px-6 py-6">
      <button
        onClick={modalSlideInput}
        className="bg-blue-500 w-32 h-12 rounded-lg text-white mb-3"
      >
        Add Action
      </button>
      {modalOverlay && <AddActionModal />}
      {/* The dimensions of your React Flow component depend on the parents dimensions. */}
      <div className="h-5/6 w-full  bg-white border-red-900 border-solid border-2">
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementClick={onElementClick}
        />
      </div>
    </div>
  );
}

export default App;

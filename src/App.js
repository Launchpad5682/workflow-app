import "./App.css";
import "./styles/output.css";
import ReactFlow, { addEdge } from "react-flow-renderer";
import { useWorkflowContext } from "./context/WorkflowContext";
import { useModalOverlayContext } from "./context/ModalOverlayContext";
import SideModal from "./components/SideModal";
import SendEmail from "./components/actions/SendEmail";
import ScheduleMeeting from "./components/actions/ScheduleMeeting";
import SetReminder from "./components/actions/SetReminder";

function App() {
  const { elements, setElements } = useWorkflowContext();
  const {
    sendEmailOverlay,
    setSendEmailOverlay,
    scheduleMeetingOverlay,
    setScheduleMeetingOverlay,
    reminderOverlay,
    setReminderOverlay,
  } = useModalOverlayContext();

  const modalSlideInput = (event) => {
    const action = event.target.id;
    if (action === "sendEmail") setSendEmailOverlay(true);
    else if (action === "scheduleMeeting") setScheduleMeetingOverlay(true);
    else setReminderOverlay(true);
  };

  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (event, element) => {
    console.log("click", element.data.label);
    const action = element.data.label;
    if (action === "Send Mail") setSendEmailOverlay(true);
    else if (action === "Schedule Meeting") setScheduleMeetingOverlay(true);
    else setReminderOverlay(true);
    // set id of the element to get the information to update
    //setModalOverlay(true);
  };

  return (
    <div className=" h-screen flex-col items-center justify-center px-6 py-6">
      <div className="pb-3">
        <span className="text-2xl font-serif mr-3">Actions</span>
        <button
          onClick={modalSlideInput}
          id="sendEmail"
          className="bg-red-500 w-48 h-12 rounded-lg text-white mr-3 font-bold"
        >
          Send Email
        </button>
        <button
          onClick={modalSlideInput}
          id="scheduleMeeting"
          className="bg-green-500 w-48 h-12 rounded-lg text-white mr-3 font-bold"
        >
          Schedule Meeting
        </button>
        <button
          onClick={modalSlideInput}
          id="setReminder"
          className="bg-yellow-500 w-48 h-12 rounded-lg text-white mb-3 font-bold"
        >
          Set Reminder
        </button>
      </div>
      {sendEmailOverlay ? (
        <SideModal action="sendEmail">
          <SendEmail />
        </SideModal>
      ) : null}
      {scheduleMeetingOverlay ? (
        <SideModal action="scheduleMeeting">
          <ScheduleMeeting />
        </SideModal>
      ) : null}
      {reminderOverlay ? (
        <SideModal action="setReminder">
          <SetReminder />
        </SideModal>
      ) : null}
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

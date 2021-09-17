import { createContext, useContext, useState } from "react";

export const ModalOverlayContext = createContext();

export const useModalOverlayContext = () => useContext(ModalOverlayContext);

export const ModalOverlayProvider = (props) => {
  const [sendEmailOverlay, setSendEmailOverlay] = useState(false);
  const [scheduleMeetingOverlay, setScheduleMeetingOverlay] = useState(false);
  const [reminderOverlay, setReminderOverlay] = useState(false);

  const value = {
    sendEmailOverlay,
    setSendEmailOverlay,
    scheduleMeetingOverlay,
    setScheduleMeetingOverlay,
    reminderOverlay,
    setReminderOverlay,
  };

  return (
    <ModalOverlayContext.Provider value={value}>
      {props.children}
    </ModalOverlayContext.Provider>
  );
};

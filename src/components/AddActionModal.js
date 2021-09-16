import React from "react";
import SendEmail from "./actions/SendEmail";
import ActionsOptions from "./ActionsOptions";
import SideModal from "./SideModal";

const AddActionModal = () => {
  return (
    <SideModal>
      <SendEmail />
    </SideModal>
  );
};

export default AddActionModal;

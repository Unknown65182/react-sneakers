import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

interface IProps {
  children?: React.ReactNode;
}

const SideModal: React.FC<IProps> = (props, { children }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const modalRef = useRef(document.getElementById("modal"));

  if (!opened || modalRef) {
    return null;
  }

  return ReactDOM.createPortal(
    <div>
      <h1>this is side modal</h1>
      {children}
    </div>,
    modalRef
  );
};

export default SideModal;

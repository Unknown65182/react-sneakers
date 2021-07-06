import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface IProps {
  opened: boolean;
  closeModal: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const SideModal: React.FC<IProps> = ({ opened, closeModal, children }) => {
  const modalRef = useRef(document.getElementById("__modal"));

  useEffect(() => {
    if (opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [opened]);

  return (
    <>
      {opened && modalRef.current
        ? ReactDOM.createPortal(
            <section className="z-10 cart-open">
              <div
                className="absolute top-0 left-0 m-0 w-full h-screen bg-black opacity-50"
                onClick={closeModal}
              ></div>
              <div className="fixed top-0 right-0 m-0 w-96 h-screen bg-white p-8 flex flex-col">
                {children}
              </div>
            </section>,
            modalRef.current
          )
        : null}
    </>
  );
};

export default SideModal;

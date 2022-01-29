import { FC } from "react";
import ReactModal from "react-modal";

export interface Props extends ReactModal.Props {
  isOpen: boolean;
}

export const Modal: FC<Props> = ({ isOpen, children, ...rest }) => {
  return (
    <ReactModal
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      {...rest}
    >
      {children}
    </ReactModal>
  );
};

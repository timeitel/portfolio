import { themeDarkColors } from "@styles/theme";
import { FC } from "react";
import ReactModal from "react-modal";

export interface Props extends ReactModal.Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ isOpen, onClose, children, ...rest }) => {
  return (
    <ReactModal
      style={modalStyles}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      onRequestClose={onClose}
      {...rest}
    >
      {children}
    </ReactModal>
  );
};

const modalStyles: ReactModal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: `${themeDarkColors.blackPrimary}`,
  },
};

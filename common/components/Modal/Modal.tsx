import { themeDarkColors } from "@styles/theme";
import { FC, useEffect } from "react";
import ReactModal from "react-modal";

export interface Props extends ReactModal.Props {
  isOpen: boolean;
  onClose: () => void;
  modalStyles?: Partial<ReactModal.Styles>;
}

export const Modal: FC<Props> = ({
  isOpen,
  onClose,
  children,
  modalStyles,
  ...rest
}) => {
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <ReactModal
      style={{
        overlay: { ...defaultStyles.overlay, ...modalStyles?.overlay },
        content: { ...defaultStyles.content, ...modalStyles?.content },
      }}
      isOpen={isOpen}
      closeTimeoutMS={250}
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

const defaultStyles: ReactModal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    zIndex: 99,
  },
  overlay: {
    backgroundColor: `${themeDarkColors.blackPrimary}`,
    zIndex: 99,
  },
};

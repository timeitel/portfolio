import { Button } from "@components/Button";
import { Modal } from "@components/Modal";
import styled from "@emotion/styled";
import { Dispatch, FC } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const NavModal: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      modalStyles={{
        content: {
          backgroundColor: "black",
        },
      }}
    >
      <StyledNavList onClick={() => setIsOpen(false)}>
        <li>
          <Button disableHover href="#about">
            About
          </Button>
        </li>
        <li>
          <Button disableHover href="#experience">
            Experience
          </Button>
        </li>
        <li>
          <Button disableHover href="#portfolio">
            Portfolio
          </Button>
        </li>
        <li>
          <Button disableHover href="#contact">
            Contact
          </Button>
        </li>
      </StyledNavList>
    </Modal>
  );
};

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: "Raleway";
  padding: 0;
  color: ${(p) => p.theme.color.whitePrimary};
`;

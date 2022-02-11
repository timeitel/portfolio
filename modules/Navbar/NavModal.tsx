import { Button } from "@components/Button";
import { Modal } from "@components/Modal";
import styled from "@emotion/styled";
import { FC } from "react";
import { scroller } from "react-scroll";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavModal: FC<Props> = ({ isOpen, onClose }) => {
  const scrollAndClose = (to: string, offset = -50) => {
    scroller.scrollTo(to, { smooth: true, offset });
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalStyles={{
        content: {
          backgroundColor: "black",
        },
      }}
    >
      <StyledNavList onClick={onClose}>
        <li>
          <Button disableHover onClick={() => scrollAndClose("about", -100)}>
            About
          </Button>
        </li>
        <li>
          <Button disableHover onClick={() => scrollAndClose("experience")}>
            Experience
          </Button>
        </li>
        <li>
          <Button disableHover onClick={() => scrollAndClose("portfolio")}>
            Portfolio
          </Button>
        </li>
        <li>
          <Button disableHover onClick={() => scrollAndClose("contact")}>
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

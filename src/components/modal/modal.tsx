import styled from "styled-components";
import { ModalInputText } from "./ModalInputText";
import { ModalProgressBar } from "./ModalProgressBar";
import { ModalHeader } from "./ModalHeader";


export const Modal = () => {
  return (
    <ModalContainer>
      <ModalHeader />
      <ModalProgressBar />
      <ModalInputText 
        placeholder="Add new task..."
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 54px 60px;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 650px;

  background: var(--bg-modal-color);
  border-radius: 4px;

  @media (max-width: 425px) {
    padding: 48px 16px;
  }
`
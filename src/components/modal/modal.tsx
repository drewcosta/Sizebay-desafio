import styled from "styled-components";
import { ModalHeader } from "./ModalHeader";
import { ModalProgressBar } from "./ModalProgressBar";
import { ModalTaskList } from "./ModalTasksList";
import { ModalFilterBar } from "./ModalFilterBar";

export const Modal = () => {
  return (
    <Container>
      <ModalHeader />
      <ModalProgressBar />
      <ModalFilterBar />
      <ModalTaskList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 20px 60px;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 650px;
  
  background: var(--bg-modal-color);
  border-radius: 4px;
  
  @media (max-width: 425px) {
    padding: 16px 18px;
  }
`

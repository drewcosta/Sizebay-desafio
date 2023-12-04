import styled from "styled-components";
import { HeaderModal } from "./header-modal";

export const Modal = () => {
  return (
    <ModalContainer>
      <HeaderModal />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 800px;
  height: 650px;
  padding: 54px 60px;

  background: var(--bg-modal-color);
  border-radius: 4px;
`

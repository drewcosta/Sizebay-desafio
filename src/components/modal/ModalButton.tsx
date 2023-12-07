import { ReactElement } from "react";
import styled from "styled-components"

interface Props {
  icon?: ReactElement;
  onClick?: () => void;
}

export const ModalButton = ({ icon, onClick }: Props) => {
  return (
    <ButtonModalContainer onClick={onClick}>
      {icon}
    </ButtonModalContainer>
  )
}

export const ButtonModalContainer = styled.button`
  padding: 15px;
  background: var(--turquesa-color);
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;

  & > svg{
    color: white;
  }
`

import { ReactElement } from "react";
import styled from "styled-components"

interface Props {
  icon?: ReactElement;
  onClick?: () => void;
  background?: string;
}

export const ModalButton = ({ icon, onClick, background }: Props) => {
  return (
    <Button onClick={onClick} background={background}>
      {icon}
    </Button>
  )
}

export const Button = styled.button<Props>`
  padding: 15px;
  background: ${(props) => props.background};
  border: none;
  cursor: pointer;
  
  & + button{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & > svg{
    color: white;
  }
`

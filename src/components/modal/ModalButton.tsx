import { ReactElement } from "react";
import styled from "styled-components"

interface Props extends StylesProps{
  icon?: ReactElement;
  onClick?: () => void;
}

export const ModalButton = ({ icon, onClick, background, colorIcon }: Props) => {
  return (
    <Button onClick={onClick} background={background} colorIcon={colorIcon}>
      {icon}
    </Button>
  )
}

interface StylesProps {
  background?: string;
  colorIcon?: string;
}

export const Button = styled.button<StylesProps>`
  padding: 15px;
  background: ${(props) => props.background};
  border: none;
  cursor: pointer;
  
  & + button{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & > svg{
    color: ${(props) => props.colorIcon};
  }
`

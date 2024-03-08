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
  border: none;
  cursor: pointer;
  background: ${(props) => {
    switch (props.background) {
      case "red":
        return props.theme.colors.red
      case "green":
        return props.theme.colors.green
      case "turquesa":
        return props.theme.colors.turquesa
      default:
        return 'transparent'
    }
  }};
  
  & + button{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & > svg{
    color: ${(props) => props.colorIcon};
  }
`

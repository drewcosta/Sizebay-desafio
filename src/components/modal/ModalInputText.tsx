import styled from "styled-components"
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { ModalButton } from "./ModalButton";

interface Props{
  placeholder?: string;
}

export const ModalInputText = ({ placeholder }: Props) => {

  const [ taskValue, setTaskValue ] = useState('');

  console.log(taskValue)

  return (
    <InputModalContainer >

      <InputModalText
        type="text"
        placeholder={placeholder}
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
      />

      <ModalButton 
        icon={<FaPlusCircle />}
      />
        
    </InputModalContainer>
  )
}

const InputModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 680px;
  max-height: 48px;
  `

const InputModalText = styled.input`
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 15px;
  background: var(--input-disabled-color);
  cursor: default;

  &:focus{
    background: var(--bg-modal-color);
    cursor: text;
  }
`


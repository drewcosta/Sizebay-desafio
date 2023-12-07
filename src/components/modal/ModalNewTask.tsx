import styled from "styled-components"
import { ReactElement, useState } from "react";
import { ModalButton } from "./ModalButton";
import { Task } from "../../types/Task";

interface Props{
  placeholder?: string;
  buttonIcon?: ReactElement;
  createTask?: (value: Task) => void;
}

export const ModalNewTask = ({ placeholder, buttonIcon, createTask }: Props) => {

  const [ taskValue, setTaskValue ] = useState('');

  console.log(taskValue)

  const handleCreateTask = () => {
    if (createTask && taskValue.trim() !== "") {
      createTask({ title: taskValue });
      setTaskValue('');
      console.log('Task created');
    }
  };

  return (
    <Container >

      <InputText
        type="text"
        placeholder={placeholder}
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
      />

      <ModalButton 
        icon={buttonIcon}
        onClick={handleCreateTask}
        background="var(--turquesa-color)"
      />
        
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 680px;
  max-height: 48px;
  `

const InputText = styled.input`
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 15px;
  background: var(--input-disabled-color);
  cursor: pointer;

  &:focus{
    background: var(--bg-modal-color);
    cursor: text;
  }
`


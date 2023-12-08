import styled from "styled-components"
import { ReactElement, useState } from "react";
import { ModalButton } from "./ModalButton";
import { Task } from "../../types/Task";
import { TaskStatus } from "../../types/TaskStatus";

const { v4: uuidv4 } = require('uuid');

interface Props {
  placeholder?: string;
  buttonIcon?: ReactElement;
  createTask?: (value: Task) => void;
}

export const ModalNewTask = ({ placeholder, buttonIcon, createTask }: Props) => {

  const [taskValue, setTaskValue] = useState('');

  const handleCreateTask = () => {
    if (createTask && taskValue.trim() !== "") {
      createTask({ id: uuidv4(), title: taskValue, status: TaskStatus.Pending });
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
        colorIcon="white"
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
  padding: 15px;

  border-radius: 4px 0 0 4px;
  
  background: var(--input-disabled-color);
  cursor: pointer;

  & + button{
    border-radius: 0 4px 4px 0;
  }

  &:focus{
    background: var(--bg-modal-color);
    cursor: text;
  }
`


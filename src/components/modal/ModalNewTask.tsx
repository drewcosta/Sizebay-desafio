import styled from "styled-components"
import { ReactElement, useState } from "react";
import { ModalButton } from "./ModalButton";
import { Task } from "../../types/Task";
import { TaskStatus } from "../../types/TaskStatus";

const { v4: uuidv4 } = require('uuid');

interface Props {
  placeholder?: string;
  buttonIcon?: ReactElement;
  createTask: (value: Task) => void;
}

export const ModalNewTask = ({ placeholder, buttonIcon, createTask }: Props) => {

  const [taskTitle, setTaskTitle] = useState('');

  const handleCreateTask = () => {
    if (taskTitle.trim() !== "") {
      createTask({ id: uuidv4(), title: taskTitle, status: TaskStatus.Pending });
      setTaskTitle('');
      console.log('Task created');
    }
  };

  return (
    <Container>

      <InputText
        type="text"
        placeholder={placeholder}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
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
  
  border: 1px solid var(--border-input-color);
  border-radius: 4px;
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


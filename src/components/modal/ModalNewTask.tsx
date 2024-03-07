import styled from "styled-components"
import { ReactElement, useState } from "react";
import { ModalButton } from "./ModalButton";
import { Task } from "../../types/Task";
import { TaskStatus } from "../../types/TaskStatus";
import { toast } from "sonner";

const { v4: uuidv4 } = require('uuid');

interface Props {
  buttonIcon?: ReactElement;
  onCreateTask: (value: Task) => void;
}

export const ModalNewTask = ({ buttonIcon, onCreateTask }: Props) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleCreateTask = () => {
    if (taskTitle.trim() !== "") {

      const task: Task = {
        id: uuidv4(),
        title: taskTitle,
        status: TaskStatus.Pending
      }

      onCreateTask(task);
      setTaskTitle('');
      toast.success('Tarefa criada com sucesso!');
    }else{
      toast.error('Digite um título para a sua tarefa!');
    }
  };

  return (
    <Container>

      <InputText
        type="text"
        placeholder='add new task...'
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


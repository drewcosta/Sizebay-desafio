import styled from "styled-components"
import { ModalButton } from "./ModalButton";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { Task } from "../../types/Task";

interface Props{
  task: Task;
  removeTask?: () => void;
  editTask?: () => void;
}

export const ModalTaskItem = ({ task, removeTask, editTask }: Props) => {

  const handleRemoveTask = () =>{
    console.log("Task removed")
  }

  return (
    <Container >

      <InputText
        type="text"
        value={task.title}
      />

      <ModalButton 
        icon={<FaMinusCircle />}
        onClick={handleRemoveTask}
        background="var(--red-color)"
      />
      <ModalButton 
        icon={<FaCheckCircle />}
        onClick={editTask}
        background="var(--green-color)"
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


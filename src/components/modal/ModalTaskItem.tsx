import styled from "styled-components"
import { ModalButton } from "./ModalButton";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import { Task } from "../../types/Task";
import { TaskStatus } from "../../types/TaskStatus";

interface Props {
  task: Task;
  removeTask: (value: Task) => void;
  editTask: (value: Task) => void;
  confirmTask: (value: Task) => void;
}

export const ModalTaskItem = ({ task, removeTask, editTask, confirmTask }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [editedTitleTask, setEditedTitleTask] = useState(task.title);

  const handleRemoveTask = () => {
    removeTask(task);
    console.log("Task removed");
    setIsInputFocused(false);
  }

  const handleEditTask = () => {
    editTask({ ...task, title: editedTitleTask });
    console.log("Task edited");
    setIsInputFocused(false);
  }

  const handleConfirmTask = () => {
    confirmTask({ ...task, status: TaskStatus.Done })
    console.log("Task confirmed");
    setIsInputFocused(false);
  }

  return (
    <Container>

      <InputText
        type="text"
        value={task.title} 
        onChange={(e) => setEditedTitleTask(task.title = e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      />

      <Tooltip showTooltip={isInputFocused} onClick={handleEditTask}>
        Edit task
      </Tooltip>


      {isInputFocused && (
        <>
          < ModalButton
            icon={<FaMinusCircle />}
            onClick={handleRemoveTask}
            background="var(--red-color)"
            colorIcon="white"
          />
          <ModalButton
            icon={<FaCheckCircle />}
            onClick={handleConfirmTask}
            background="var(--green-color)"
            colorIcon="white"
          />
        </>
      )}

    </Container>
  )
}

interface StylesProps {
  showTooltip: boolean
}

const Container = styled.div`
  position: relative;
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

  background: var(--input-disabled-color);
  cursor: pointer;
  z-index: 2;

  &:focus {
    background: var(--bg-modal-color);
    cursor: text;
  }
`

const Tooltip = styled.span<StylesProps>`
  display: ${(props) => (props.showTooltip ? "inline-block" : "none")};
  position: absolute;
  top: 80%;
  width: 75px;
  padding: 5px 0;
  
  color: #FFFFFF;
  background-color: var(--grey-text-color);
  text-align: center;
  border-radius: 4px;
  z-index: 3;
  cursor: pointer;
`


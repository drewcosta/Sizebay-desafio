import styled from "styled-components"
import { ModalButton } from "./ModalButton";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { Task } from "../../types/Task";
import { useState } from "react";

interface Props {
  task: Task;
  removeTask: (value: Task) => void;
  editTask: (value: Task) => void;
}

export const ModalTaskItem = ({ task, removeTask, editTask }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [editedTitleTask, setEditedTitleTask] = useState(task.title);

  const handleRemoveTask = () => {
    removeTask(task)
    console.log("Task removed");
  }

  const handleEditTask = () => {
    editTask({ ...task, title: editedTitleTask })
    console.log("Task edited");
    setIsInputFocused(false)
  }

  return (
    <Container >

      <InputText
        type="text"
        value={editedTitleTask}
        onChange={(e) => setEditedTitleTask(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      />
      <Tooltip showTooltip={isInputFocused} onClick={handleEditTask}>
        Edit task
      </Tooltip>

      <ModalButton
        icon={<FaMinusCircle />}
        onClick={handleRemoveTask}
        background="var(--red-color)"
      />
      <ModalButton
        icon={<FaCheckCircle />}
        // onClick={}
        background="var(--green-color)"
      />

    </Container>
  )
}

interface StylesProps {
  showTooltip: boolean
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 680px;
  max-height: 48px;

  position: relative;
  `

const InputText = styled.input`
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 15px;
  background: var(--input-disabled-color);
  cursor: pointer;
  z-index: 2;

  &:focus,
  &:hover{
    background: var(--bg-modal-color);
    cursor: text;
  }
`

const Tooltip = styled.span<StylesProps>`
  display: ${(props) => (props.showTooltip ? "inline-block" : "none")};
  position: absolute;
  top: 80%;
  width: 75px;
  color: #FFFFFF;
  background-color: var(--grey-text-color);
  text-align: center;
  border-radius: 4px;
  padding: 5px 0;
  z-index: 3;
  cursor: pointer;
`


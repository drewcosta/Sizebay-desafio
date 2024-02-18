import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ModalButton } from "./ModalButton";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { Task } from "../../types/Task";
import { TaskStatus } from "../../types/TaskStatus";
import { toast } from "sonner";

interface Props {
  task: Task;
  deleteTask: (value: Task) => void;
  editTask: (value: Task) => void;
  confirmTask: (value: Task) => void;
}

export const ModalTaskItem = ({ task, deleteTask, editTask, confirmTask }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [editedTitleTask, setEditedTitleTask] = useState(task.title);
  const taskRef = useRef(null);

  const handleDeleteTask = () => {
    deleteTask(task);
    toast.success('Tarefa removida!');
  };

  const handleEditTask = () => {
    if (editedTitleTask.trim() === '') return toast.error('Digite um título para a sua tarefa!');
    editTask({ ...task, title: editedTitleTask });
    setIsInputFocused(false);
  };

  const handleConfirmTask = () => {
    if (editedTitleTask.trim() === '') return toast.error('Digite um título para a sua tarefa!');
    confirmTask({ ...task, status: TaskStatus.Done });
    setIsInputFocused(false);
    toast.success('Tarefa concluída!');
  };

  const handleTaskFocus = (event: MouseEvent) => {
    setIsInputFocused(true);

    if (taskRef.current && !(taskRef.current as HTMLDivElement).contains(event.target as Node)) {
      setIsInputFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleTaskFocus);

    return () => {
      document.removeEventListener("mousedown", handleTaskFocus);
    };
  }, []);

  return (
    <Container ref={taskRef}>
      <InputText
        type="text"
        value={task.title}
        onChange={(e) => setEditedTitleTask(task.title = e.target.value)}
      />

      {isInputFocused && (
        <>
          <Tooltip onClick={handleEditTask}>
            Edit task
          </Tooltip>

          <ModalButton
            icon={<FaMinusCircle />}
            onClick={handleDeleteTask}
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
  );
};


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
`;

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
`;

const Tooltip = styled.span`
  display: block;
  position: absolute;
  top: 80%;
  width: 75px;
  padding: 5px 0;
  color: #ffffff;
  background-color: var(--grey-text-color);
  text-align: center;
  border-radius: 4px;
  z-index: 3;
  cursor: pointer;
`;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ModalButton } from "./ModalButton";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { Task } from "../../types/Task";
import { TaskStatus } from "../../types/TaskStatus";
import { toast } from "sonner";

interface Props {
  task: Task;
  onDeleteTask: (value: Task) => void;
  onEditTask: (value: Task) => void;
  onConfirmTask: (value: Task) => void;
}

export const ModalTaskItem = ({ task, onDeleteTask, onEditTask, onConfirmTask }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [editedTitleTask, setEditedTitleTask] = useState(task.title);
  const taskRef = useRef(null);

  const handleDeleteTask = () => {
    onDeleteTask(task);
    setIsInputFocused(false);
    toast.success('Tarefa removida!');
  };

  const handleEditTask = () => {
    if (editedTitleTask.trim() === '') return toast.error('Digite um título para a sua tarefa!');
    onEditTask({ ...task, title: editedTitleTask });
    setIsInputFocused(false);
    toast.success('Tarefa editada!');
  };

  const handleConfirmTask = () => {
    if (editedTitleTask.trim() === '') return toast.error('Digite um título para a sua tarefa!');
    onConfirmTask({ ...task, status: TaskStatus.Done });
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
            background='red'
            colorIcon="white"
          />
          <ModalButton
            icon={<FaCheckCircle />}
            onClick={handleConfirmTask}
            background="green"
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
  border: 1px solid ${props => props.theme.colors.border_input};;
  border-radius: 4px;
`;

const InputText = styled.input`
  width: 100%;
  height: 100%;
  padding: 15px;
  background: ${props => props.theme.colors.Disable_input};;
  cursor: pointer;
  z-index: 2;

  &:focus {
    background: ${props => props.theme.colors.white};;
    cursor: text;
  }
`;

const Tooltip = styled.span`
  display: block;
  position: absolute;
  top: 80%;

  width: 75px;
  padding: 5px 0;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.grey};
  border-radius: 4px;

  font-size: ${props => props.theme.fontSizes.text_sm};
  font-weight: normal;
  font-style: normal;
  text-align: center;

  z-index: 3;
  cursor: pointer;
`;

import * as S from './TaskItem.styles'
import { useState, useRef, useEffect } from "react";
import { TaskItemProps } from "./TaskItem.types";
import { toast } from "sonner";
import { ModalInputText } from '../../Inputs';
import { ModalButton } from '../../Button';
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { Tooltip } from '../../Tooltip';
import { useTaskOperations } from '../../../../hooks/useTaskOperations';

export function TaskItem({ task }: TaskItemProps) {
  const { onConfirmTask, onDeleteTask, onEditTask} = useTaskOperations();
  
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [newContent, setNewContent] = useState(task.title);
  const taskRef = useRef(null);

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
    setIsInputFocused(false);
    toast.success('Tarefa removida!');
  };

  const handleEditTask = () => {
    if (newContent.trim() === '') return toast.error('Digite um título para a sua tarefa!');
    onEditTask(task.id, newContent);
    setIsInputFocused(false);
    toast.success('Tarefa editada!');
  };

  const handleConfirmTask = () => {
    if (newContent.trim() === '') return toast.error('Digite um título para a sua tarefa!');
    onConfirmTask(task.id);
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
    <S.TaskItemContainer ref={taskRef}>

      <ModalInputText
        value={task.title}
        onChange={(e) => setNewContent(task.title = e.target.value)}
        $taskItem
        $taskItemDone={task.status === 'done'}
        aria-label='Task Item'
      />

      {isInputFocused && (
        <>
          <Tooltip
            title='Edit Task'
            onClick={handleEditTask}
            $taskItem
          />
          
          <ModalButton
            icon={<FaMinusCircle />}
            onClick={handleDeleteTask}
            $excludeButton
            data-testid='delete-task-button'
          />

          <ModalButton
            icon={<FaCheckCircle />}
            onClick={handleConfirmTask}
            $doneButton
            data-testid='confirm-task-button'
          />
        </>
      )}
    </S.TaskItemContainer>
  )
}
import { ChangeEvent, useState } from "react";
import * as S from "./NewTask.styles";
import { ModalInputText } from "../Inputs";
import { ModalButton } from "../Button";
import { ITask } from "../../../types/ITask";
import { NewTaskProps } from "./INewTask";
import { TaskStatus } from "../../../types/TaskStatus";
import { toast } from "sonner";
import { FaPlusCircle } from "react-icons/fa"

const { v4: uuidv4 } = require('uuid');

export function ModalNewTask({ icon, onCreateTask }: NewTaskProps) {

  const [taskTitle, setTaskTitle] = useState('');

  const handleCreateTask = () => {
    if (taskTitle.trim() !== "") {

      const task: ITask = {
        id: uuidv4(),
        title: taskTitle,
        status: TaskStatus.Pending
      }

      onCreateTask(task);
      setTaskTitle('');
      toast.success('Tarefa criada com sucesso!');
    } else {
      toast.error('Digite um título para a sua tarefa!');
    }
  };

  function changeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value)
  }

  return (
    <S.NewTaskWrapper>
      <ModalInputText
        placeholder="add new task..."
        value={taskTitle}
        onChange={changeTitle}
        aria-label="New Task"
      />

      <ModalButton
        onClick={handleCreateTask}
        icon={<FaPlusCircle />}
        $addButton
      />
    </S.NewTaskWrapper>
  )
}
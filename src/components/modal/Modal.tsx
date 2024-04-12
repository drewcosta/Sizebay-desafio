import * as S from './Modal.styles'

import { ModalHeader } from "./Header";
import { ModalFilterBar } from "./FilterBar";
import { ModalProgressBar } from "./ProgressBar";
import { ModalTaskList } from "./TaskList";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ITask } from "../../types/ITask";

export function Modal() {
  const { value: tasks, updateLocalStorage } = useLocalStorage<ITask[]>('tasks-list', []);

  const tasksDone = tasks.filter(task => task.status === 'done');
  const progressPercentage = tasks.length > 0 ? (tasksDone.length / tasks.length) * 100 : 0;

  return (
    <S.Container>
      <ModalHeader />
      <ModalProgressBar percentage={progressPercentage} />
      <ModalFilterBar />
      <ModalTaskList
        tasks={tasks}
        updateLocalStorage={updateLocalStorage}
      />
    </S.Container>
  );
}


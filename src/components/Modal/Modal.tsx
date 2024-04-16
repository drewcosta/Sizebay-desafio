import * as S from './Modal.styles'

import { ModalHeader } from "./Header";
import { ModalFilterBar } from "./FilterBar";
import { ModalProgressBar } from "./ProgressBar";
import { ModalTaskList } from "./TaskList";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ITask } from "../../types/ITask";

export function Modal() {
  const { value: tasks, updateLocalStorage } = useLocalStorage<ITask[]>('tasks-list', []);

  return (
    <S.Container>
      <ModalHeader />
      <ModalProgressBar tasks={tasks} />
      <ModalFilterBar />
      <ModalTaskList
        tasks={tasks}
        updateLocalStorage={updateLocalStorage}
      />
    </S.Container>
  );
}


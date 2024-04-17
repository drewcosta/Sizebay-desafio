import * as S from './Modal.styles'

import { ModalHeader } from "./Header";
import { ModalFilterBar } from "./FilterBar";
import { ModalProgressBar } from "./ProgressBar";
import { ModalTaskList } from "./TaskList";
import { ModalNewTask } from './NewTask';

export function Modal() {

  return (
    <S.Container>
      <ModalHeader />
      <ModalProgressBar />
      <ModalFilterBar />
      <ModalNewTask />
      <ModalTaskList />
    </S.Container>
  );
}


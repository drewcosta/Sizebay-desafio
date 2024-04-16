import * as S from './Modal.styles'

import { ModalHeader } from "./Header";
import { ModalFilterBar } from "./FilterBar";
import { ModalProgressBar } from "./ProgressBar";
import { ModalTaskList } from "./TaskList";

export function Modal() {
  return (
    <S.Container>
      <ModalHeader />
      <ModalProgressBar />
      <ModalFilterBar />
      <ModalTaskList />
    </S.Container>
  );
}


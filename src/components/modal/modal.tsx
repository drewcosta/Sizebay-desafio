import styled from "styled-components";

import { ModalHeader } from "./Header";
import { ModalFilterBar } from "./FilterBar";
import { ModalProgressBar } from "./ProgressBar";
import { ModalTaskList } from "./TaskList";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ITask } from "../../types/ITask";

export const Modal = () => {
  const { value: tasks, updateLocalStorage } = useLocalStorage<ITask[]>('tasks-list', []);
  
  const tasksDone = tasks.filter(task => task.status === 'done');
  const progressPercentage = tasks.length > 0 ? (tasksDone.length / tasks.length) * 100 : 0;

  return (
    <Container>
      <ModalHeader />
      <ModalProgressBar percentage={progressPercentage} />
      <ModalFilterBar />
      <ModalTaskList
        tasks={tasks}
        updateLocalStorage={updateLocalStorage}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 20px 60px;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 650px;
  
  background: ${({theme}) => theme.colors.whiteBasic};
  border-radius: 4px;
  
  @media (max-width: 425px) {
    padding: 16px 18px;
  }
`

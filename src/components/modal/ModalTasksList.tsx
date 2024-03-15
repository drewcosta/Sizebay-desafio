import styled from "styled-components"
import { FaPlusCircle } from "react-icons/fa"
import { ModalNewTask } from "./ModalNewTask"
import { ModalTaskItem } from "./ModalTaskItem"
import { ModalNoResults } from "./ModalNoResults"
import { useFilterTasks } from "../../hooks/useFilterTasks"
import { ITask } from "../../types/Task"

interface Props{
  tasks: ITask[],
  updateLocalStorage: (value: ITask[]) => void
}

export const ModalTasksList = ({ tasks, updateLocalStorage }: Props) => {
  const { currentStatus, searchTask } = useFilterTasks();

  const filterTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasksByStatus = filterTasksByStatus(currentStatus);
  const filteredTasks = filteredTasksByStatus.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  function onCreateTask(newTask: ITask){
    const updateTasks = [...tasks, newTask];
    return updateLocalStorage(updateTasks)
  }

  function onEditTask(editTask: ITask){
    const updateTasks = tasks.map(task => task.id === editTask.id ? editTask : task);
    return updateLocalStorage(updateTasks);
  }

  function onDeleteTask(deleteTask: ITask){
    const updateTasks = tasks.filter(task => task.id !== deleteTask.id);
    return updateLocalStorage(updateTasks);
  }

  function onConfirmTask(confirmTask: ITask){
    const updateTasks = tasks.map(task => task.id === confirmTask.id ? confirmTask : task);
    return updateLocalStorage(updateTasks);
  }

  return (
    <TaskListContainer>

      <ModalNewTask
        buttonIcon={<FaPlusCircle />}
        onCreateTask={onCreateTask}
      />

      <TasksListContent>
        {(searchTask || currentStatus) && filteredTasks.length < 1 ? (
          <ModalNoResults />
        ) : (
          filteredTasks.map((task, index) => (
            <ModalTaskItem
              key={index}
              task={task}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
              onConfirmTask={onConfirmTask}
            />
          )))}
      </TasksListContent>

    </TaskListContainer>
  )
}

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 100%;
`

const TasksListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
  gap: 8px;

  width: 100%;
  height: 216px;
  max-width: 680px;
  max-height: 216px;

  overflow-y: auto;
`


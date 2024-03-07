import styled from "styled-components"
import { FaPlusCircle } from "react-icons/fa"
import { ModalNewTask } from "./ModalNewTask"
import { ModalTaskItem } from "./ModalTaskItem"
import { ModalNoResults } from "./ModalNoResults"
import { useFilterTasks } from "../../hooks/useFilterTasks"
import { Task } from "../../types/Task"

interface Props{
  tasks: Task[],
  updateLocalStorage: (value: Task[]) => void
}

export const ModalTaskList = ({ tasks, updateLocalStorage }: Props) => {
  const { currentStatus, searchTask } = useFilterTasks();

  const filterTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasksByStatus = filterTasksByStatus(currentStatus);
  const filteredTasks = filteredTasksByStatus.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  console.log('dentro de list', tasks);

  function handleCreateTask(newTask: Task){
    const updateTasks = [...tasks, newTask];
    return updateLocalStorage(updateTasks)
  }

  function handleEditTask(editTask: Task){
    const updateTasks = tasks.map(task => task.id === editTask.id ? editTask : task);
    return updateLocalStorage(updateTasks);
  }

  function handleDeleteTask(deleteTask: Task){
    const updateTasks = tasks.filter(task => task.id !== deleteTask.id);
    return updateLocalStorage(updateTasks);
  }

  function handleConfirmTask(confirmTask: Task){
    const updateTasks = tasks.map(task => task.id === confirmTask.id ? confirmTask : task);
    return updateLocalStorage(updateTasks);
  }

  return (
    <TaskListContainer>

      <ModalNewTask
        buttonIcon={<FaPlusCircle />}
        onCreateTask={handleCreateTask}
      />

      <TasksListContent>
        {(searchTask || currentStatus) && filteredTasks.length < 1 ? (
          <ModalNoResults />
        ) : (
          filteredTasks.map((task, index) => (
            <ModalTaskItem
              key={index}
              task={task}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
              onConfirmTask={handleConfirmTask}
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


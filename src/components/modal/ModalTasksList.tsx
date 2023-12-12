import styled from "styled-components"
import { ModalNewTask } from "./ModalNewTask"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { FaPlusCircle } from "react-icons/fa"
import { ModalTaskItem } from "./ModalTaskItem"
import { Task } from "../../types/Task"
import { useFilterTasks } from "../../hooks/useFilterTasks"
import { ModalNoResults } from "./ModalNoResults"

export const ModalTaskList = () => {
  const { value: tasks, updateLocalStorage } = useLocalStorage<Task[]>('tasks-list', []);
  const { currentStatus, searchTask } = useFilterTasks();

  const handleCreateTask = (newTask: Task) => {
    const updateTasks = [...tasks, newTask];
    return updateLocalStorage(updateTasks);
  }

  const handleEditTask = (editTask: Task) => {
    const updateTasks = tasks.map(task => task.id === editTask.id ? editTask : task)
    return updateLocalStorage(updateTasks);
  }

  const handleRemoveTask = (removeTask: Task) => {
    const updateTasks = tasks.filter(task => task.id !== removeTask.id);
    return updateLocalStorage(updateTasks);
  }

  const handleConfirmTask = (confirmTask: Task) => {
    const updateTasks = tasks.map(task => task.id === confirmTask.id ? confirmTask : task);
    return updateLocalStorage(updateTasks);
  }

  const filteredTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasks = filteredTasksByStatus(currentStatus);

  const filteredTasksSearch = filteredTasks.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()))

  return (
    <TaskListContainer>

      <ModalNewTask
        placeholder="Add new task..."
        buttonIcon={<FaPlusCircle />}
        createTask={handleCreateTask}
      />

      <TasksListContent>
        {currentStatus && filteredTasksSearch.length < 1 ? (
          <ModalNoResults />
        ) : (
          filteredTasksSearch.map((task, index) => (
            <ModalTaskItem
              key={index}
              task={task}
              removeTask={handleRemoveTask}
              editTask={handleEditTask}
              confirmTask={handleConfirmTask}
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
  justify-content: center;
  align-items: center;  
  gap: 8px;

  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 216px;

  overflow-y: auto;
`


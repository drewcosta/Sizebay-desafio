import styled from "styled-components"
import { FaPlusCircle } from "react-icons/fa"
import { ModalNewTask } from "./ModalNewTask"
import { ModalTaskItem } from "./ModalTaskItem"
import { ModalNoResults } from "./ModalNoResults"
import { Task } from "../../types/Task"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useFilterTasks } from "../../hooks/useFilterTasks"

export const ModalTaskList = () => {
  const { value: tasks, updateLocalStorage } = useLocalStorage<Task[]>('tasks-list', []);
  const { currentStatus, searchTask } = useFilterTasks();

  // CRUD
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

  // Filters
  const filteredTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasks = filteredTasksByStatus(currentStatus);
  const filtertedTasksSearch = filteredTasks.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  return (
    <TaskListContainer>

      <ModalNewTask
        placeholder="Add new task..."
        buttonIcon={<FaPlusCircle />}
        createTask={handleCreateTask}
      />

      <TasksListContent>
        {currentStatus && filtertedTasksSearch.length < 1 ? (
          <ModalNoResults />
        ) : (
          filtertedTasksSearch.map((task, index) => (
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


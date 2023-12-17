import styled from "styled-components"
import { FaPlusCircle } from "react-icons/fa"
import { ModalNewTask } from "./ModalNewTask"
import { ModalTaskItem } from "./ModalTaskItem"
import { ModalNoResults } from "./ModalNoResults"
import { useFilterTasks } from "../../hooks/useFilterTasks"
import { useCrud } from "../../hooks/useTaskCrud"

export const ModalTaskList = () => {
  const { currentStatus, searchTask } = useFilterTasks();
  const { tasks, handleCreateTask, handleEditTask, handleDeleteTask, handleConfirmTask } = useCrud();

  const filteredTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasks = filteredTasksByStatus(currentStatus);
  const filteredTasksSearch = filteredTasks.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  return (
    <TaskListContainer>

      <ModalNewTask
        placeholder="Add new task..."
        buttonIcon={<FaPlusCircle />}
        createTask={handleCreateTask}
      />

      <TasksListContent>
        {(searchTask || currentStatus) && filteredTasksSearch.length < 1 ? (
          <ModalNoResults />
        ) : (
          filteredTasksSearch.map((task, index) => (
            <ModalTaskItem
              key={index}
              task={task}
              deleteTask={handleDeleteTask}
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
  justify-content: flex-start;
  align-items: center;  
  gap: 8px;

  width: 100%;
  height: 216px;
  max-width: 680px;
  max-height: 216px;

  overflow-y: auto;
`


import styled from "styled-components"
import { FaPlusCircle } from "react-icons/fa"
import { ModalNewTask } from "./ModalNewTask"
import { ModalTaskItem } from "./ModalTaskItem"
import { ModalNoResults } from "./ModalNoResults"
import { useFilterTasks } from "../../hooks/useFilterTasks"
import { Task } from "../../types/Task"

interface Props{
  tasks: Task[],
}

export const ModalTaskList = ({ tasks }: Props) => {
  const { currentStatus, searchTask } = useFilterTasks();

  const filterTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasksByStatus = filterTasksByStatus(currentStatus);
  const filteredTasks = filteredTasksByStatus.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  console.log('dentro de list', tasks)

  

  return (
    <TaskListContainer>

      <ModalNewTask
        placeholder="Add new task..."
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


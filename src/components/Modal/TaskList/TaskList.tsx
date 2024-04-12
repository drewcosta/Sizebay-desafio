import * as S from './TaskList.styles';
import { useFilterTasks } from "../../../hooks/useFilterTasks";
import { ITask } from "../../../types/ITask";
import { TaskListProps } from "./ITaskList";
import { ModalNewTask } from '../NewTask';
import { NoResults } from './NoResults';
import { TaskItem } from './TaskItem';

export function ModalTaskList({ tasks, updateLocalStorage }: TaskListProps) {
  const { currentStatus, searchTask, removeFilters } = useFilterTasks();

  const filterTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasksByStatus = filterTasksByStatus(currentStatus);
  const filteredTasks = filteredTasksByStatus.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  function onCreateTask(newTask: ITask) {
    const updateTasks = [...tasks, newTask];
    return updateLocalStorage(updateTasks)
  }

  function onEditTask(editTask: ITask) {
    const updateTasks = tasks.map(task => task.id === editTask.id ? editTask : task);
    return updateLocalStorage(updateTasks);
  }

  function onDeleteTask(deleteTask: ITask) {
    const updateTasks = tasks.filter(task => task.id !== deleteTask.id);
    return updateLocalStorage(updateTasks);
  }

  function onConfirmTask(confirmTask: ITask) {
    const updateTasks = tasks.map(task => task.id === confirmTask.id ? confirmTask : task);
    return updateLocalStorage(updateTasks);
  }


  return (
    <S.TaskListContainer>

      <ModalNewTask
        onCreateTask={onCreateTask}
      />

      <S.TaskList>
        {(searchTask || currentStatus) && filteredTasks.length < 1 ? (
          <NoResults removeFilters={removeFilters} />
        ) : (
          filteredTasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
              onConfirmTask={onConfirmTask}
            />
          )))}

      </S.TaskList>
      
    </S.TaskListContainer>
  )
}
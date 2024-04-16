import * as S from './TaskList.styles';
import { useFilterTasks } from "../../../hooks/useFilterTasks";
import { ITask } from "../../../types/ITask";
import { TaskListProps } from "./TaskList.types";
import { ModalNewTask } from '../NewTask';
import { NoResults } from './NoResults';
import { TaskItem } from './TaskItem';
import { TaskStatus } from '../../../types/TaskStatus';
const { v4: uuidv4 } = require('uuid');

export function ModalTaskList({ tasks, updateLocalStorage }: TaskListProps) {
  const { currentStatus, searchTask, removeFilters } = useFilterTasks();

  const filterTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasksByStatus = filterTasksByStatus(currentStatus);
  const filteredTasks = filteredTasksByStatus.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  function onCreateTask(content: string) {
    const newTask: ITask = {
      id: uuidv4(),
      title: content,
      status: TaskStatus.Pending
    }

    const updateTasks = [...tasks, newTask];
    return updateLocalStorage(updateTasks)
  }

  function onEditTask(newContent: string, id: string) {
    const updateTasks = tasks.map(task => task.id === id ? { ...task, title: newContent } : task);
    return updateLocalStorage(updateTasks);
  }

  function onDeleteTask(id: string) {
    const updateTasks = tasks.filter(task => task.id !== id);
    return updateLocalStorage(updateTasks);
  }

  function onConfirmTask(id: string) {
    const updateTasks = tasks.map(task => task.id === id ? { ...task, status: TaskStatus.Done } : task);
    return updateLocalStorage(updateTasks);
  }

  return (
    <S.TaskListContainer>

      {!searchTask &&
        <ModalNewTask
          onCreateTask={onCreateTask}
        />
      }

      <S.TaskList>
        {(searchTask || currentStatus) && filteredTasks.length < 1 ? (
          <NoResults removeFilters={removeFilters} statusResult={currentStatus} />
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
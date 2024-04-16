import * as S from './TaskList.styles';
import { useFilterTasks } from "../../../hooks/useFilterTasks";
import { ModalNewTask } from '../NewTask';
import { NoResults } from './NoResults';
import { TaskItem } from './TaskItem';
import { useTaskOperations } from '../../../hooks/useTaskOperations';

export function ModalTaskList() {
  const { tasks, onConfirmTask, onDeleteTask, onCreateTask, onEditTask } = useTaskOperations('tasks-list', []);
  const { currentStatus, searchTask, removeFilters } = useFilterTasks();

  const filterTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasksByStatus = filterTasksByStatus(currentStatus);
  const filteredTasks = filteredTasksByStatus.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

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
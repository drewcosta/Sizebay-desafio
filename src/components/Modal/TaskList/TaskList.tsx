import * as S from './TaskList.styles';
import { useTaskOperations } from "../../../hooks/useTaskOperations";
import { NoResults } from './NoResults';
import { TaskItem } from './TaskItem';

export function ModalTaskList() {
  const { currentStatus, searchTask, removeFilter, filteredTasks } = useTaskOperations();

  return (
    <S.TaskListContainer>
      <S.TaskList>
        {(searchTask || currentStatus) && filteredTasks.length < 1 ? (
          <NoResults removeFilter={removeFilter} statusResult={currentStatus} />
        ) : (
          filteredTasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
            />
          )))}

      </S.TaskList>

    </S.TaskListContainer>
  )
}
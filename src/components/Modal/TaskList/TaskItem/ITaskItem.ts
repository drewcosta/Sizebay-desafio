import { ITask } from "../../../../types/ITask";

export interface TaskItemProps {
  task: ITask;
  onDeleteTask: (value: ITask) => void;
  onEditTask: (value: ITask) => void;
  onConfirmTask: (value: ITask) => void;
}
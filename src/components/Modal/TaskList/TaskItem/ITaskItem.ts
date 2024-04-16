import { ITask } from "../../../../types/ITask";

export interface TaskItemProps {
  task: ITask;
  onDeleteTask: (id: string) => void;
  onEditTask: (newContent: string, id: string) => void;
  onConfirmTask: (id: string) => void;
}
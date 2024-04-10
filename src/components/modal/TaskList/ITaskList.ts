import { ITask } from "../../../types/ITask";

export interface TaskListProps{
  tasks: ITask[];
  updateLocalStorage: (value: ITask[]) => void;
}
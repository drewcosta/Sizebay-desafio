import { ITask } from "../../../types/ITask";

export interface ProgressBarStyles {
  width: number;
}

export interface ProgressBarProps {
  tasks: ITask[];
}
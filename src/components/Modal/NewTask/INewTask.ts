import { ReactElement } from "react";
import { ITask } from "../../../types/ITask";

export interface NewTaskProps{
  icon?: ReactElement;
  onCreateTask: (task: ITask) => void;
}
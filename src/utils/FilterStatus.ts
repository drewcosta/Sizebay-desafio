import { TaskStatus } from "../types/TaskStatus"

export const getTaskStatus = (status: TaskStatus) => {
  if(status === TaskStatus.Done) return 'done';
  if(status === TaskStatus.Pending) return 'pending';
  return '';
}
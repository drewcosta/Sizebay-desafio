import { Task } from "../types/Task";
import { useLocalStorage } from "./useLocalStorage";

export const useCrud = () => {
  const {value: tasks, updateLocalStorage} = useLocalStorage<Task[]>('tasks-list', []);

  const handleCreateTask = (newTask: Task) => {
    const updateTasks = [...tasks, newTask];
    return updateLocalStorage(updateTasks);
  }

  const handleEditTask = (editTask: Task) => {
    const updateTasks = tasks.map(task => task.id === editTask.id ? editTask : task)
    return updateLocalStorage(updateTasks);
  }

  const handleDeleteTask = (deleteTask: Task) => {
    const updateTasks = tasks.filter(task => task.id !== deleteTask.id);
    return updateLocalStorage(updateTasks);
  }

  const handleConfirmTask = (confirmTask: Task) => {
    const updateTasks = tasks.map(task => task.id === confirmTask.id ? confirmTask : task);
    return updateLocalStorage(updateTasks);
  }

  return {
    tasks,
    handleCreateTask,
    handleEditTask,
    handleDeleteTask, 
    handleConfirmTask
  }

}
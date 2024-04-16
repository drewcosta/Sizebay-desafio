import { useEffect, useState } from 'react';
import { ITask } from "../types/ITask";
import { TaskStatus } from '../types/TaskStatus';

const { v4: uuidv4 } = require('uuid');

export function useTaskOperations(key: string, initialValue: ITask[]) {
  const [tasks, setTasks] = useState<ITask[]>(initialValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const value = localStorage.getItem(key);
      if (value) setTasks(JSON.parse(value));
    } catch (error) {
      console.log("Erro ao acessar localStorage", error);
    }
  }, [key])

  const updateLocalStorage = (newValue: ITask[]) => {
    setTasks(newValue);

    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log("Erro salvar localStorage", error);
    }
  }

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

  return {
    tasks,
    onDeleteTask,
    onEditTask,
    onConfirmTask,
    onCreateTask,
  }
}

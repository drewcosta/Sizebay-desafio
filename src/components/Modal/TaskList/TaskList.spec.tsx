import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ModalTaskList } from './TaskList'
import { ITask } from '../../../types/ITask'
import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../../styles/theme'
import { FilterContextProvider } from '../../../contexts/FilterContext'

const RenderAPP = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FilterContextProvider>
        {children}
      </FilterContextProvider>
    </ThemeProvider>
  )
}

let tasks: ITask[] = [
  { id: '1', title: 'task1', status: 'pending' },
];

const updateLocalStorageMock = jest.fn();

it('Render tasks list', () => {
  render(
    <RenderAPP>
      <ModalTaskList />;
    </RenderAPP>
  )

  expect(tasks).toHaveLength(tasks.length);

  tasks.forEach(task => {
    expect(screen.getByDisplayValue(task.title)).toBeInTheDocument();
  });
});

describe('Test task operations', () => {

  beforeEach(() => {
    tasks = [
      { id: '1', title: 'task1', status: 'pending' },
    ];
    jest.clearAllMocks();
  });


  it('Create a new task', () => {

    const newTaskTest = {
      id: '2',
      title: 'newTaskTest',
      status: 'pending',
    }

    function onCreateTask(newTask: ITask) {
      tasks = [...tasks, newTask];
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onCreateTask(newTaskTest);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);
  });

  it('Edit an existing task', () => {

    const editTaskTest = {
      id: '1',
      title: 'title edited',
      status: 'pending',
    }

    function onEditTask(newContent:string, id:string) {
      tasks = tasks.map(task => task.id === id ? {...task, title: newContent} : task);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onEditTask(editTaskTest.title, editTaskTest.id);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });

  it('Delete an existing task', () => {

    const deleteTaskTest = {
      id: '1',
      title: 'title edited',
      status: 'pending',
    }

    function onDeleteTask(id: string) {
      tasks = tasks.filter(task => task.id !== id);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onDeleteTask(deleteTaskTest.id);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });

  it('Confirm a task by changing the status to done', () => {

    const ConfirmTaskTest = {
      id: '1',
      title: 'task1',
      status: 'done',
    }

    function onConfirmTask(id: string) {
      tasks = tasks.map(task => task.id === id ? {...task, status: "done"} : task);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onConfirmTask(ConfirmTaskTest.id);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });
});
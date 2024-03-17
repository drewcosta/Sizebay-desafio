import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ModalTasksList } from './ModalTasksList'
import { ITask } from '../../types/Task'
import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/theme'
import { FilterContextProvider } from '../../contexts/FilterContext'

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
      <ModalTasksList tasks={tasks} updateLocalStorage={updateLocalStorageMock} />;
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

    function onEditTask(editTask: ITask) {
      tasks = tasks.map(task => task.id === editTask.id ? editTask : task);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onEditTask(editTaskTest);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });

  it('Delete an existing task', () => {

    const deleteTaskTest = {
      id: '1',
      title: 'title edited',
      status: 'pending',
    }

    function onDeleteTask(deleteTask: ITask) {
      tasks = tasks.filter(task => task.id !== deleteTask.id);
      updateLocalStorageMock(tasks);
      return tasks;
    }

    const updatedTasks = onDeleteTask(deleteTaskTest);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });

  it('Confirm a task by changing the status to done', () => {

    const ConfirmTaskTest = {
      id: '1',
      title: 'task1',
      status: 'done',
    }

    function onEditTask(confirmTask: ITask) {
      tasks = tasks.map(task => task.id === confirmTask.id ? confirmTask : task);
      updateLocalStorageMock(tasks);
      return tasks;
    }


    const updatedTasks = onEditTask(ConfirmTaskTest);

    expect(updateLocalStorageMock).toHaveBeenCalledWith(tasks);
    expect(updatedTasks).toEqual(tasks);

  });
});
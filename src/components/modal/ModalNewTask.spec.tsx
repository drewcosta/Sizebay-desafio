import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { ModalNewTask } from './ModalNewTask'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/theme'
import { FilterContextProvider } from '../../contexts/FilterContext'
import { toast } from 'sonner'

jest.mock('uuid', () => ({
  v4: () => 'mocked-id'
}));

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const RenderAPP = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FilterContextProvider>
        <ModalNewTask
          onCreateTask={onCreateTask}
        />
      </FilterContextProvider>
    </ThemeProvider>
  )
}

const onCreateTask = jest.fn();

const user = userEvent.setup();

it('Render Modal New Task component', () => {
  render(
    <RenderAPP />
  )

  const InputPlaceholderText = screen.getByPlaceholderText('add new task...');
  const createButton = screen.getByRole('button');

  expect(InputPlaceholderText).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
})


it('should call onCreateTask when the user clicks the create task button', async () => {
  render(
    <RenderAPP />
  )

  const taskMock = {
    id: 'mocked-id',
    title: 'changeTaskTitle',
    status: 'pending',
  }

  const changeInputValue = screen.getByDisplayValue('');
  await user.type(changeInputValue, 'changeTaskTitle');

  const createTaskButton = screen.getByRole('button');
  expect(createTaskButton).toHaveStyle({ background: 'rgb(77, 166, 179)' });

  await user.click(createTaskButton);
  
  expect(onCreateTask).toHaveBeenCalledWith(taskMock);
  expect(toast.success).toHaveBeenCalledWith('Tarefa criada com sucesso!');
});


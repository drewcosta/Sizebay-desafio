import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { TaskItem } from './TaskItem'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../../../styles/theme'
import { FilterContextProvider } from '../../../../contexts/FilterContext'
import { toast } from 'sonner'

const RenderAPP = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FilterContextProvider>
        <TaskItem
          task={taskMock}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          onConfirmTask={onConfirmTask}
        />
      </FilterContextProvider>
    </ThemeProvider>
  )
}

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const taskMock = {
  id: '1',
  title: 'tasktest',
  status: 'pending',
}

const onDeleteTask = jest.fn();
const onEditTask = jest.fn();
const onConfirmTask = jest.fn();

it('Render task item', () => {
  render(
    <RenderAPP />
  )

  expect(screen.getByDisplayValue(taskMock.title)).toBeInTheDocument();
})

describe('Test task handling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const user = userEvent.setup();

  it('should call onDeleteTask when the user clicks the delete button', async () => {
    render(
      <RenderAPP />
    )

    const handleInput = screen.getByDisplayValue(taskMock.title);
    await user.click(handleInput);

    const deleteButton = screen.getAllByRole('button');
    // console.log(deleteButton[0]);
    expect(deleteButton[0]).toHaveStyle({background: 'rgb(227, 79, 79)'});
    
    await user.click(deleteButton[0]);

    expect(onDeleteTask).toHaveBeenCalledWith(taskMock);
    expect(toast.success).toHaveBeenCalledWith('Tarefa removida!');
  });

  it('should call onConfirmTask when the user clicks the confirm button', async () => {
    render(
      <RenderAPP />
    )

    const handleInput = screen.getByDisplayValue(taskMock.title);
    await user.click(handleInput);

    const confirmButton = screen.getAllByRole('button');

    expect(confirmButton[1]).toHaveStyle({background: 'rgb(93, 226, 144)'});
    
    await user.click(confirmButton[1]);

    expect(onConfirmTask).toHaveBeenCalledWith({...taskMock, status: 'done'});
    expect(toast.success).toHaveBeenCalledWith('Tarefa concluída!');
  });

  it('should call onEditTask when the user clicks the tooltip', async () => {
    render(
      <RenderAPP />
    )

    const handleInput = screen.getByDisplayValue(taskMock.title);
    await user.click(handleInput);

    const tooltip = screen.getByRole('tooltip');
    
    await user.click(tooltip);

    expect(onEditTask).toHaveBeenCalledWith(taskMock);
    expect(toast.success).toHaveBeenCalledWith('Tarefa editada!');
  });
});


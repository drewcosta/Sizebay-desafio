import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { FilterContextProvider, FilterContext } from './FilterContext';

describe('Render provider context without errors', () => {

  it('Render without errors', () => {
    render(
      <FilterContextProvider>
        <div>Test Component</div>
      </FilterContextProvider>
    );
  });

  it('Provide context for child components', () => {
    const ChildComponent = () => {
      const { currentStatus, searchTask } = React.useContext(FilterContext);
      return (
        <>
          <div data-testid="current-status">{currentStatus}</div>
          <div data-testid="search-task">{searchTask}</div>
        </>
      );
    };

    render(
      <FilterContextProvider>
        <ChildComponent />
      </FilterContextProvider>
    );

    expect(screen.getByTestId('current-status')).toHaveTextContent('');
    expect(screen.getByTestId('search-task')).toHaveTextContent('');
  });

})

describe('', () => {

  it('Context states initializes empty', () => {
    render(
      <FilterContextProvider>
        <FilterContext.Consumer>
          {({ currentStatus, searchTask }) => (
            <>
              <div data-testid="current-status">{currentStatus}</div>
              <div data-testid="search-task">{searchTask}</div>
            </>
          )}
        </FilterContext.Consumer>
      </FilterContextProvider>
    );

    expect(screen.getByTestId('current-status')).toHaveTextContent('');
    expect(screen.getByTestId('search-task')).toHaveTextContent('');
  });

  it('Update the context state correctly', async () => {
    const user = userEvent.setup();

    render(
      <FilterContextProvider>
        <FilterContext.Consumer>
          {({ currentStatus, searchTask, setCurrentStatus, setSearchTask, removeFilters }) => (
            <>
              <button onClick={() => setCurrentStatus('New')} data-testid='current-status'>{currentStatus}</button>
              <input onChange={(e) => setSearchTask(e.target.value)} data-testid='search-task-value' value={searchTask} />
              <button onClick={removeFilters} data-testid='removeFilters'>Remove Filters</button>
            </>
          )}
        </FilterContext.Consumer>
      </FilterContextProvider>
    );

    await user.click(screen.getByTestId('current-status'));
    expect(screen.getByTestId('current-status')).toHaveTextContent('New');

    const changeInputValue = screen.getByDisplayValue('');
    await user.type(changeInputValue, 'some task');

    expect(screen.getByTestId('search-task-value')).toHaveValue('some task');

    await user.click(screen.getByTestId('removeFilters'));
    expect(screen.getByTestId('current-status')).toHaveTextContent('');
    expect(screen.getByTestId('search-task-value')).toHaveValue('');
  });

})




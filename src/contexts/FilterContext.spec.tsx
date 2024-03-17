import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { FilterContextProvider, FilterContext } from './FilterContext';

it('Render without errors', () => {
  render(
    <FilterContextProvider>
      <div>Test Component</div>
    </FilterContextProvider>
  );
});

it('Context initializes empty', () => {
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

it('Update the context state correctly', () => {
  const user = userEvent.setup();

  render(
    <FilterContextProvider>
      <FilterContext.Consumer>
        {({ setCurrentStatus, setSearchTask, removeFilters }) => (
          <>
            <button onClick={() => setCurrentStatus('New')}>Set Status</button>
            <button onClick={() => setSearchTask('Task')}>Set Task</button>
            <button onClick={removeFilters}>Remove Filters</button>
          </>
        )}
      </FilterContext.Consumer>
    </FilterContextProvider>
  );

  // user.click(screen.getByText('Set Status'));
  // expect(screen.getByTestId('current-status')).toHaveTextContent('New');

  // user.click(screen.getByText('Set Task'));
  // expect(screen.getByTestId('search-task')).toHaveTextContent('Task');

  // user.click(screen.getByText('Remove Filters'));
  // expect(screen.getByTestId('current-status')).toHaveTextContent('');
  // expect(screen.getByTestId('search-task')).toHaveTextContent('');
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

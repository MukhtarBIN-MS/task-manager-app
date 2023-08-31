import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from './Task';

test('updating task completion status', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'This is a test task',
    dueDate: '2023-12-31',
    completed: false,
    reminder: false,
  };
  const mockUpdateTask = jest.fn(); // Create a mock updateTask function

  render(<Task task={mockTask} updateTask={mockUpdateTask} deleteTask={() => {}} />);

  fireEvent.click(screen.getByText(/Complete/i)); // Click the complete button

  // Check if updateTask function was called with the updated completion status
  expect(mockUpdateTask).toHaveBeenCalledWith(1, {
    ...mockTask,
    completed: true,
  });
});

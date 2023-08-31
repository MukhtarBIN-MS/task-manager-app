import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from './Task';

test('deleting a task', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'This is a test task',
    dueDate: '2023-12-31',
    completed: false,
    reminder: false,
  };
  const mockDeleteTask = jest.fn(); // Create a mock deleteTask function

  render(<Task task={mockTask} updateTask={() => {}} deleteTask={mockDeleteTask} />);

  fireEvent.click(screen.getByText(/Delete/i)); // Click the delete button

  // Check if deleteTask function was called with the correct task ID
  expect(mockDeleteTask).toHaveBeenCalledWith(1);
});

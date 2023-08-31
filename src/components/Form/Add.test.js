import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('adding a task', () => {
  const mockAddTask = jest.fn(); // Create a mock addTask function

  render(<Form addTask={mockAddTask} />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'New Task' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'New task description' } });
  fireEvent.change(screen.getByLabelText(/Due Date/i), { target: { value: '2023-12-31' } });

  fireEvent.click(screen.getByText(/Add Task/i)); // Submit the form

  // Check if addTask function was called with the correct task data
  expect(mockAddTask).toHaveBeenCalledWith({
    title: 'New Task',
    description: 'New task description',
    dueDate: '2023-12-31',
    completed: false, 
    reminder: false,
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form Component', () => {
  test('submitting the form with valid data', () => {
    const mockAddTask = jest.fn();

    render(<Form addTask={mockAddTask} />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-12-31' } });

    // Click the "Add Task" button to submit the form
    fireEvent.click(screen.getByText('Add Task'));

    // Check if addTask function was called with the correct task data
    expect(mockAddTask).toHaveBeenCalledWith(    
      expect.objectContaining({
        title: 'Test Title',
        description: 'Test Description',
        dueDate: '2023-12-31',
        completed: false,
        reminder: false,
      })
      );
  });

  test('submitting the form with incomplete data', () => {
    const mockAddTask = jest.fn();
    window.alert = jest.fn(); 

    render(<Form addTask={mockAddTask} />);

    // Click the "Add Task" button to submit the form without filling in data
    fireEvent.click(screen.getByText('Add Task'));

    // Check if alert message appears for incomplete form
    expect(window.alert).toHaveBeenCalledWith('Complete the form please');
  });
});

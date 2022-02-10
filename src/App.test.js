import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('#App Tests', () => {
  beforeEach(() => {
    render(<App />)
  });

  it('should render the title', () => {
    const title = screen.getByRole('heading', /todo app/i);
    expect(title).toBeInTheDocument();
  });
  it('should have an input field and allow text entry in the input field', () => {
    const inputField = screen.getByLabelText(/new item/i);
    expect(inputField).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: 'new text' } });
    expect(inputField).toHaveValue('new text');
  });
  it('should have a button called "add item" ', () => {
    const addButton = screen.getByRole('button', { name: /add item/i });
    expect(addButton).toBeInTheDocument();
  });
  it('should add a new items to the list when the button is clicked', () => {
    const inputField = screen.getByLabelText(/new item/i);
    const addButton = screen.getByRole('button', { name: /add item/i });
    fireEvent.change(inputField, { target: { value: 'clean trash' } });
    fireEvent.click(addButton)
    const newItem = screen.getByRole('listitem');
    expect(newItem).toBeInTheDocument();
    expect(screen.getByText(/clean trash/i)).toBeInTheDocument();
  });

  it('should set the input field to empty after adding an item', () => {
    const inputField = screen.getByLabelText(/new item/i);
    const addButton = screen.getByRole('button', { name: /add item/i });
    fireEvent.change(inputField, { target: { value: 'clean trash' } });
    fireEvent.click(addButton)
    expect(inputField).toHaveValue('');
  });

});
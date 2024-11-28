import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '.';
import StyledProvider from '../../contexts/StyledContext';

describe('SearchBar Component', () => {
  test('renders all input fields and labels correctly', () => {
    render(
      <StyledProvider>
        <SearchBar />
      </StyledProvider>
    );

    // Check if the label for location is rendered
    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();

    // Check if the location input is rendered with the correct placeholder
    const locationInput = screen.getByPlaceholderText(/rechercher une destination/i);
    expect(locationInput).toBeInTheDocument();
    expect(locationInput).toHaveAttribute('type', 'text');
    expect(locationInput).toHaveAttribute('id', 'location');
  });

  test('renders the date and traveler sections', () => {
    render(
      <StyledProvider>
        <SearchBar />
      </StyledProvider>
    );

    // Check for "Date" and "Quand ?" spans
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/quand \?/i)).toBeInTheDocument();

    // Check for "Voyageurs" and "Combien ?" spans
    expect(screen.getByText(/voyageurs/i)).toBeInTheDocument();
    expect(screen.getByText(/combien \?/i)).toBeInTheDocument();
  });

  test('renders the submit button with the correct value', () => {
    render(
      <StyledProvider>
        <SearchBar />
      </StyledProvider>
    );

    // Check if the submit button is rendered with the correct value
    const submitButton = screen.getByRole('button', { name: /rechercher/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'button');
  });

  test('handles user input in the location field', () => {
    render(
      <StyledProvider>
        <SearchBar />
      </StyledProvider>
    );

    const locationInput = screen.getByPlaceholderText(/rechercher une destination/i);

    // Simulate user typing in the input field
    fireEvent.change(locationInput, { target: { value: 'Paris' } });
    expect(locationInput).toHaveValue('Paris');
  });
});

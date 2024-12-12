import { fireEvent, render, screen } from '@testing-library/react';
import StyledProvider from '../../contexts/StyledContext';
import Dropdown from '.';

describe('Dropdown Component', () => {
  const renderDropdown = () => {
    const mockContent = 'Test content';
    render(
      <StyledProvider>
        <Dropdown heading="Test Heading" content={mockContent} />
      </StyledProvider>
    );
  };

  it('renders the heading and does not show content initially', () => {
    renderDropdown();
    // Check that heading is rendering correctly
    const heading = screen.getByText(/test heading/i);
    expect(heading).toBeInTheDocument();

    // Checks that the content is not initially displayed
    const content = screen.queryByText(/test content/i);
    expect(content).not.toBeInTheDocument();
  });

  it('shows content when the button is clicked', () => {
    renderDropdown();

    const button = screen.getByRole('button');

    // Open the dropdown at click
    fireEvent.click(button);

    // Check that content is displayed
    const content = screen.getByText(/test content/i);
    expect(content).toBeInTheDocument();
  });

  it('hides content when the button is clicked again', () => {
    renderDropdown();

    const button = screen.getByRole('button', { name: /test heading/i });

    // Open dropdown at click
    fireEvent.click(button);

    // Click again to close the dropdown
    fireEvent.click(button);

    // Check that content is not displayed
    const content = screen.queryByText(/test content/i);
    expect(content).not.toBeInTheDocument();
  });
});

import StyledProvider from '../../contexts/StyledContext';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from '.';

describe('Dropdown Component', () => {
  const testHeading = 'Test Heading';
  const testContent = <p>Test Content</p>;

  test('renders the dropdown with heading and hidden content initially', () => {
    render(
      <StyledProvider>
        <Dropdown heading={testHeading} content={testContent} />
      </StyledProvider>
    );

    // Check if the heading is rendered
    expect(screen.getByText(testHeading)).toBeInTheDocument();

    // Check that the content is not displayed initially
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  test('toggles content visibility when the button is clicked', () => {
    render(
      <StyledProvider>
        <Dropdown heading={testHeading} content={testContent} />
      </StyledProvider>
    );

    const button = screen.getByRole('button', { name: /test heading/i });

    // Initial state: Content should not be visible
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();

    // Click to open the dropdown
    fireEvent.click(button);
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Click to close the dropdown
    fireEvent.click(button);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  test('renders content when opened and applies correct wrapper mode', () => {
    render(
      <StyledProvider>
        <Dropdown heading={testHeading} content={testContent} />
      </StyledProvider>
    );

    const button = screen.getByText(/test heading/i);
    const wrapper = screen.getByRole('region'); // Assuming `DropdownWrapper` has a `role="region"`

    // Initial state: mode="false"
    expect(wrapper).toHaveAttribute('mode', 'false');

    // Click to open the dropdown
    fireEvent.click(button);
    expect(wrapper).toHaveAttribute('mode', 'true');

    // Click to close the dropdown
    fireEvent.click(button);
    expect(wrapper).toHaveAttribute('mode', 'false');
  });
});

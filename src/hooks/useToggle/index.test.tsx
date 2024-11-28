import { renderHook, act } from '@testing-library/react';
import { useToggle } from '.';

describe('useToggle Hook', () => {
  // Test that the hook initializes with the default value (false)
  test('initializes with default value (false)', () => {
    const { result } = renderHook(() => useToggle());

    // Check that the initial value is "false"
    const [value] = result.current;
    expect(value).toBe(false);
  });

  // Test that the hook initializes with a custom initial value
  test('initializes with a custom initial value', () => {
    const { result } = renderHook(() => useToggle(true));

    // Check that the initial value is "true"
    const [value] = result.current;
    expect(value).toBe(true);
  });

  // Test the toggle function, ensuring the value switches from false to true and back to false
  test('toggles the value from false to true and back to false', () => {
    const { result } = renderHook(() => useToggle());

    const [initialValue, toggle] = result.current;

    // Verify the initial value is "false"
    expect(initialValue).toBe(false);

    // Use `act` to simulate a toggle action
    act(() => toggle()); // Change from "true" to "false"

    const [valueAfterFirstToggle] = result.current;
    expect(valueAfterFirstToggle).toBe(true);

    act(() => toggle()); // Change from "true" to "false"

    const [valueAfterSecondToggle] = result.current;
    expect(valueAfterSecondToggle).toBe(false);
  });

  // Test the toggle function when the initial value is "true"
  test('toggles correctly when initial value is true', () => {
    const { result } = renderHook(() => useToggle(true));

    const [initialValue, toggle] = result.current;

    // Verify the initial value is "true"
    expect(initialValue).toBe(true);

    act(() => toggle()); // Change from "true" to "false"

    const [valueAfterFirstToggle] = result.current;
    expect(valueAfterFirstToggle).toBe(false);
  });
});

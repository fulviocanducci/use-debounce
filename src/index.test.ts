import { renderHook } from '@testing-library/react-hooks';
import { useDebounce } from '.';

// mock timer using jest
jest.useFakeTimers();

describe('useDebounce', () => {
  it('string Empty', () => {
    const value = '';
    const { result } = renderHook(() => useDebounce(value));
    expect(result.current).toBe('');
  });
  it('number 1', () => {
    const value = 1;
    const { result } = renderHook(() => useDebounce(value));
    expect(result.current).toBe(1);
  });
});

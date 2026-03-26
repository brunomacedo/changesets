import * as React from "react";

/**
 * Hook that stores the previous value of a prop or state.
 *
 * @template T - The type of the value
 * @param value - The current value to track
 * @returns The previous value, or the initial value on first render
 *
 * @example
 * const prevCount = usePrevious(count);
 */
function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef<T>(value);

  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export { usePrevious };

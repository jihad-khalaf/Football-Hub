import { useState, useEffect } from 'react';

// CUSTOM HOOK: works exactly like useState, but the value is also saved
// in localStorage, so it is still there after the page is refreshed.
function useLocalStorage(key, initialValue) {
  // 1) LOAD once: read the saved value, or use the initial value
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // 2) SAVE every time the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // 3) return the same shape as useState
  return [value, setValue];
}

export default useLocalStorage;

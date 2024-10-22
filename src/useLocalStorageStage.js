import { useEffect, useState } from "react";

export function useLocalStorageStage(initialState, Key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(Key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(Key, JSON.stringify(value));
    },
    [value, Key]
  );

  return [value, setValue];
}

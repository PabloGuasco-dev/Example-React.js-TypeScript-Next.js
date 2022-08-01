import { useState, useEffect } from 'react'

const useDebounce = (initialValue, delay) => {
    const [actualValue, setActualValue] = useState(initialValue);
    const [debounceValue, setDebounceValue] = useState(initialValue);
    useEffect(() => {
      const debounceId = setTimeout(() => setDebounceValue(actualValue), delay);
      return () => clearTimeout(debounceId);
    }, [actualValue, delay]);
    return [debounceValue, setActualValue] as const;
  };
  
export default useDebounce;

// many thanks to my friend Khartik for writing what I was planning to write myself: 
// https://gist.github.com/karthik-raja-g/d33cd8a29a9e622177492d3cfe306219#file-usedebouncefinal-js 
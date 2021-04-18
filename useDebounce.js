
/**Custom hook to debounce a input value with specific delay*/
/**I can also add the function logic to it if needed */

import { useEffect, useState } from 'react';
export const useDebounce = (value = '',delay = 1000) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {

        //Update debounce val after delay passed
        const handler = setTimeout(() => {
            console.log('executing change!');
            setDebounceValue(value)
        },delay)

        //cancel the timeout if value changed from the input
        return () => {
            console.log('cleaning...');
            clearTimeout(handler)
        }
    },[value,delay]) // Only re-call effect if value or delay change

    return debounceValue;
}
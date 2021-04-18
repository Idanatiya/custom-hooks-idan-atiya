
import { useLayoutEffect } from 'react';
export const useScrollFreeze = () => {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow
        }
    },[])

}

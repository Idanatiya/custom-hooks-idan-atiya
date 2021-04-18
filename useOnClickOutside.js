
import { useEffect } from 'react';

/*A useful hook to detect click outside of an element*/


const useOnClickOutside = (ref,handler) => {
    useEffect(() => {
        //check if the elemnt is outside of the DOM REF element, if so close the modal  with the handler.
        const listener = (ev) => {
            const {target: clickedElement} = ev;
            if(!ref.current || ref.current.contains(clickedElement)) return;
            handler()            
        }

        //when someone clicked with the mouse on en element
        document.addEventListener('mousedown',listener)
        //when we click in mobile screens
        document.addEventListener('touchstart',listener)

        return () => {
            document.removeEventListener('mousedown',listener)
            document.removeEventListener('touchstart',listener)
        }
    },[])
}

export {useOnClickOutside}
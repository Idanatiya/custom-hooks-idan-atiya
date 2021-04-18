
/**Cusatom hook to get the width/height of the window live,returning width and hight values */
import {useState,useLayoutEffect} from 'react';

export const useWindowDimensions = () => {
    const initialValue = {
       width: window.innerWidth,
       height: window.innerHeight
    }
    const [dimension,setDimensions] = useState(initialValue)
    useLayoutEffect(() => {
        const handleResize = () => setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
         })
        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }

    },[])

    return {width: dimension.width, height: dimension.height}
}
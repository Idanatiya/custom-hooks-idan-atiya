import {useState, useRef, useEffect} from 'react';

/*This custom hook can measure any element appling the ref using the ResizeObserver API. */

// /The observe() method of the ResizeObserver interface starts observing the specified Element or SVGElement.
export const useMesaure = () => {
  const ref = useRef ();
  const initialVal = {left: 0, top: 0, width: 0, height: 0} 
  const [bounds, setBounds] = useState (initialVal);

  const [resizeO] = useState(() => {
    //resize observer returns array of entries, i get the entry i need and get the data with entry.contentRect
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });


  useEffect(() => {
      //if the element we use resizeObserver exists we start to 'observe'
      if(ref.current) {
          resizeO.observe(ref.current)
      }
      //stop observing all elements on cleanup
      return () => {
          console.log('stop observing...');
          resizeO.disconnect();
      }
  },[resizeO])

  return [{ref},bounds]
};



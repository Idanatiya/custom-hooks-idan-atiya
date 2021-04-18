
/***Simple custom hook to inc/dec/rest a value, with option to define a custom maxVal,minVal, step and initial val */


import {useDebugValue, useState} from 'react';
const useInc = ({initialVal = 0, maxValue = 1000, minValue = -1000, step = 1}) => {
  const [value, setValue] = useState (initialVal);

  //increment /decrment optionally by a step
  const inc = () =>
    setValue (prevState => (prevState + step >= maxValue ? maxValue : prevState + step));

  const dec = () =>
    setValue (prevState => (prevState - step <= minValue ? minValue : prevState - step));

  const reset = () => setValue (initialVal);

  const incToMaxVal = () => setValue(maxValue)

  const decToMinVal = () => setValue(minValue)


  useDebugValue(value >= maxValue || value <= minValue ? 'You have reached max/min value' : 'You can use the hook'  )

  //first value can be renamed for flexbility, the functions are exported by name
  return [value, {inc, dec, reset,incToMaxVal,decToMinVal}];
};

export default useInc;


/**Custom hook to load script such as recaptch,stripe,paypal with cached array - idan atiya*/ 
import {useState, useEffect} from 'react'
let cached = []

export const useScript = (src) => {
    const initialValue = {loaded: false,error: false};
    const [status,setStatus] = useState(initialValue);

    useEffect(() => {
        //check if the passed in src is in cahced then automatically load it, if not push it ton the array
        if(cached.includes(src)) {
            setStatus({loaded: true, error: false})
            console.log('Chached:',cached);

        } else {
            cached.push(src)
            console.log('pushing...');
            //create a script tag
            const script = document.createElement('script')
            script.src = src;
            script.async = true;

            //functions to set status in case of load and error
            const onLoad = () => {
                setStatus({loaded: true, error: false})
            }
            const onError = () => {
                //remove the src from cached if there is an error
                cached = cached.filter(item => item !== src);
                //remove the dom element from exsitence
                script.remove()
                setStatus({loaded: true, error: true})
            }

            //add event listener to the script element
            script.addEventListener('load', onLoad)
            script.addEventListener('error', onError)

            //append the script to the body - its a must!, i have to add it to the DOM.
            document.body.appendChild(script)
            return () => {
                script.removeEventListener('load', onLoad)
                script.removeEventListener('error', onError)  
            }
        }
    },[src])

    return [status.loaded, status.error]
}
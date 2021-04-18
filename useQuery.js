/**This hook take takes unlimited query string from 
 * the url and returns an object that contain the key/value pairs */
 import { useHistory } from "react-router-dom";

const useQuery = (queryOptions=[]) => {
    const history = useHistory()
    const queryParams = new URLSearchParams(history.location.search)
    console.log(queryParams);
    const queryObject = queryOptions.reduce((acc,option)=>{
       if(!acc[option]) acc[option] = null
       acc[option] = queryParams.get(`${option}`)
       return acc
   },{})

    return queryObject
}

export default useQuery;
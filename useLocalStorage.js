
/*Custom Hook to save,load,remove, clear keys from localstorage with an option to connect localstorage to an input */
import {useState,useEffect} from 'react'

export const useLocalStorage = (key,initialVal) => {
    //start to get the item with the specified kjey if exists in storage, load it
    const item = localStorage.getItem(key)
    const [value,setValue] = useState(item || initialVal)

    useEffect(() => {
        saveToStorage(key,value)
    },[key,value,initialVal])


    //expose useful function to use local storage
    const saveToStorage  = (key,val) => {
        if(typeof val !== 'object') localStorage.setItem(key,val);
        else localStorage.setItem(key, JSON.stringify(val));
    }

    const loadFromStorage = key => {
        if(typeof val !== 'object') return localStorage.getItem(key)
        return JSON.parse(localStorage.getItem(key))
    }

    const removeFromStorage = key => localStorage.removeItem(key)

    const clearLocalStorage = () => localStorage.clear()

    return [value,setValue, {saveToStorage,loadFromStorage,removeFromStorage,clearLocalStorage}]
}
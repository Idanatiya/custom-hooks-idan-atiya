 

 /**Custom hook to update cookie via an input with js-cookie libraray */
import Cookies from 'js-cookie';
import {useState,useEffect} from 'react'

export const useCookie = ({key, expires = 14}) => {
    const initial = Cookies.get(key)
    const [cookie,setCookie] = useState(initial)
    //get all available cookies
    const getAllCookies = () => Cookies.get()
    //delete cookie
    const deleteCookie = (key) =>  Cookies.remove(key,{ path: '' })
    //get specific cookie
    const getCookie = () => Cookies.get(key)
    //set custom cookie
    const setCustomCookie = (value) => Cookies.set(key,value, {expires})
    useEffect(() => {
        Cookies.set(key,cookie,{expires})
    },[cookie,key,expires])
    return [cookie,setCookie, {deleteCookie,getCookie,getAllCookies,setCustomCookie}]
}
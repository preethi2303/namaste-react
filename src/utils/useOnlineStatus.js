import { useEffect, useState } from "react";

const UseOnlineStatus = () => {

    const[onlineStatus,setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener('online',() => {
            setOnlineStatus (true)
        })
        window.addEventListener('offline',() => {
            setOnlineStatus (false)
        })
    },[])
    console.log('onlineStatus',onlineStatus)
    return onlineStatus;
}

export default UseOnlineStatus
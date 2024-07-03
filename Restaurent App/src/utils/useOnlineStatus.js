// Creating a hook to show the status of the internet on website.
// This hook will return the status of the internet connection.

import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, [])

    return onlineStatus;
}

export default useOnlineStatus; 
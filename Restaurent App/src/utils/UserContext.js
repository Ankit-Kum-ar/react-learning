import { createContext } from "react"

// This component implements the react context to avoid props drilling situation.
export const UserContext = createContext(
    {
        loggedInUser : "Default User",
    }
)
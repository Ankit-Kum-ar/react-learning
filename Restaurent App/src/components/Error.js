import { useRouteError } from "react-router-dom"



export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>{err.status} Error</h1>
            <p>Page {err.statusText}</p>
        </div>
    )
}
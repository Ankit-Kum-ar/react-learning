import { useRouteError } from "react-router-dom"
export const Error = () => {
    const err = useRouteError();
    console.log(err);
    if(err === null) return (
        <div>
            <h1>404 Error</h1>
            <p>Page Not Found</p>
        </div>
    )
    return (
        <div>
            <h1>{err.status} Error</h1>
            <p>Page {err.statusText}</p>
        </div>
    )
}
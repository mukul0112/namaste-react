import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Who told you write rubish in that bar. Now fix it yourself.</h1>
            {/* {`${err.status}:${err.error.message}`} */}
        </div>
    )
}
export default Error;
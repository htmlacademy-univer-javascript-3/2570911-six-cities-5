import { Link } from "react-router-dom";

export function Error404(){
    return (
        <div>
            <h1>404 Not Found</h1>
            <h2>Вы кто такие, я вас не звал идите...</h2>
            <Link to="/" style={{color: 'blue', textDecoration: 'underline blue'}}>Идти на главную</Link>
        </div>
    )
}
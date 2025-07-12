import {Link} from "@inertiajs/react";
import {route} from "ziggy-js";
export default function Main() {
    return (
        <>
           <h1>hello world</h1>

            <a  href={route('dashboard')}>
                 go to dashboard
            </a>
        </>
    )
}

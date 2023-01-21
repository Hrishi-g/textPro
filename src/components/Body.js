import { useState } from "react";
function Body() {
    const [count, setcount] = useState(0);
    return (
        <>
            <button
                type="button"
                className="btn btn-primary position-relative"
                onClick={() => setcount(count + 1)}
            >
                click
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {count}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </>
    );
}

export default Body;

import { useState } from "react";

const Body2 = (props) => {
    const [text, settext] = useState("");
    const [change, setChange] = useState("");

    const handle = (e) => {
        settext(e.target.value);
    };

    const changeup = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    };

    const changelow = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    };

    const clear = () => {
        setChange(text);
        let newtext = "";
        settext(newtext);
    };

    const undo = () => {
        settext(change);
    };

    const copy = () => {
        let copied = document.getElementById("myBox");
        copied.select();
        navigator.clipboard.writeText(text);
    };

    const handlespace = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
    };

    // const handleChange = () => {
    //     if (props.mode.color == "black") {
    //         props.setMode({
    //             backgroundColor: "black",
    //             color: "white",
    //             height: "100vh",
    //         });
    //     } else {
    //         props.setMode({
    //             backgroundColor: "white",
    //             color: "black",
    //             height: "100vh",
    //         });
    //     }
    // };

    return (
        <div
            className="container"
            style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "light" ? "black" : "white",
            }}
        >
            {/*style={props.mode}*/}
            <div className="container">
                <h1 className="container my-4">Enter text below</h1>
                {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleChange}
                >
                    click
                </button> */}
            </div>
            <div className="container">
                <textarea
                    className="form-control"
                    value={text}
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "white" : "black",
                        color: props.mode === "light" ? "black" : "white",
                    }}
                    id="myBox"
                    rows="8"
                    onChange={handle}
                ></textarea>
                <button
                    className="btn btn-primary mx-2 my-3"
                    onClick={changeup}
                >
                    Uppercase
                </button>

                <button
                    className="btn btn-primary mx-2 my-3"
                    onClick={changelow}
                >
                    Lowercase
                </button>

                <button className="btn btn-primary mx-2 my-3" onClick={copy}>
                    Copy
                </button>

                <button
                    className="btn btn-primary mx-2 my-3"
                    onClick={handlespace}
                >
                    Remove Extra Space
                </button>

                <button className="btn btn-primary mx-2 my-3" onClick={clear}>
                    Clear
                </button>

                <button className="btn btn-primary mx-2 my-3" onClick={undo}>
                    Undo
                </button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>
                    {text.split(/\s+/).length} words and {text.length} characters
                </p>
                <p>
                    Time to read sentence{" "}
                    {(text.split(" ").length * 0.08).toFixed(2)} minutes
                </p>
            </div>
        </div>
    );
};

export default Body2;

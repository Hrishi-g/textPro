import Navbar from "./components/Navbar";
// import Body from "./components/Body";
import Body2 from "./components/Body2";
// import About from "./components/About";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link
} from "react-router-dom";

const App = () => {
    const [mode, setMode] = useState("light");

    const toogle = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "black";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };

    // const [mode, setMode] = useState({
    //     backgroundColor: "black",
    //     color: "white",
    // });
    return (
        <>
        <Router>
        <Navbar name="App Name" mode={mode} toogle={toogle} />
        <Routes>
                <Route exact path="/" element={<Body2 mode={mode} />}/>
                {/* <Route exact path="/about" element={<About mode={mode} />}/> */}
                {/* <Route exact path="/body" element={<Body2 mode={mode} />}/> */}
            </Routes>
        </Router>
            
            {/* <Body2 mode={mode} setMode={setMode} /> */}
            {/* <Body /> */}
        </>
    );
};

export default App;

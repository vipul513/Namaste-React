import React from "react";
import ReactDOM from "react-dom/client";


// React Element JSX
const jsxHeading = (
    <h1 id="heading" tabIndex={5}> 
        Namaste Javascript Episode-3 🚀🚀
    </h1>
);

// components
// 1) Class based components  -- OLD
// 2) Functional based components -- NEW

// react element 
const heading = <h1>Namaste React Heading</h1>

const Title = () => (
    <div id="container">
        <h2> Learning React </h2>
    </div>
)
// react functional component
const HeadingComponent = () => (
    <div id="check">
        <Title />
        <h1 className="heading">Namaste React 🚀🚀 Heading Component </h1>
    </div>
);


const rootElm = ReactDOM.createRoot(document.getElementById("root"));

// if you want to render react component write it in <../>
rootElm.render(<HeadingComponent/>);
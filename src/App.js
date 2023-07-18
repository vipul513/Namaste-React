import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body } from "./components/index";

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const rootElm = ReactDOM.createRoot(document.getElementById("root"));

// if you want to render react component write it in <../>
rootElm.render(<AppLayout />);
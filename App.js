import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "This is namaste react 🚀"),
        React.createElement("h2", {}, "Hello From React2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "Hello From React"),
        React.createElement("h2", {}, "Hello From React2")
    ]),
]);
const heading = React.createElement("h1", {}, "Hello From React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
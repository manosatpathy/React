const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "i am h1"),
    React.createElement("h2", { id: "h2" }, "i am h2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

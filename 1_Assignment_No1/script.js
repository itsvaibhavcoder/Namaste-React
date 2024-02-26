const heading = React.createElement(
    "h1",
    // in this object we can pass all the attribute for the elements and also can add style.
    {
        id: "title",
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    // attribute passed -- (React - props)
    {
        id: "container",
    },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

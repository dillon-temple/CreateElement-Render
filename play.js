
const header = React.createElement("div", null,
    React.createElement("h1", null, "Hello Dojo!"),
    React.createElement("h2", null, "Things I need to do:"),
    React.createElement("ul", {color:"Green"},
        React.createElement("li", {color:"Blue"}, "Learn React"),
        React.createElement("li", {color:"Blue"}, "Climb Mt. Everest"),
        React.createElement("li", {color:"Blue"}, "Run a Marathon"),
        React.createElement("li", {color:"Blue"}, "Feed the Dogs"),
    )
);
  
 

 
  ReactDOM.render(header, document.getElementById("app"));
//   ReactDOM.render(list_header, document.getElementById("app"));
//   ReactDOM.render(list, document.getElementById("app"));



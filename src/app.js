// this explains the components this.props.children
// https://react-tutorial.app/app.html?id=376
// pretty good read

import React from "react";
import {render} from "react-dom";

const root = document.querySelector("#root");

function Hero(props) {
	return (
		(props.name) ? <h1>Heelo {props.name}</h1> : <h1>Heelo World</h1>
	);
}

let name = new URL(location.href).searchParams.get("name");

console.log(name)
render(<Hero name={name}/>, root);


// class App extends React.Component{
// 	render(){
// 		return <h1>Welcome to our website!</h1>
// 	}
// }
// // if i un comment this render call App component get rendered
// render(<App/>, root)
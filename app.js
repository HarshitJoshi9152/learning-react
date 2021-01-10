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

render(<Hero name="harshit"/>, root);

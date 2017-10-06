import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import YTSearch from "youtube-api-search";
import "core-js/es6/map";
import "core-js/es6/set";


class Reloj extends React.Component {
	constructor(props) {
		super(props);
		this.state = { fecha: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			fecha: new Date()
		});
	}

	render() {
		return (
         <div>
            <h1>Hola Mundo!</h1>
            <h2>Son las {this.state.fecha.toLocaleTimeString()}.</h2>
         </div>
		);
	}
}

class CustomTextInput extends React.Component {
	constructor(props) {
		super(props);
		this.focus = this.focus.bind(this);
	}

	focus() {
		this.textInput.focus();
	}

	render() {
		return (
			<div>
				<input
					type="text"
					ref={(input) => {
						this.textInput = input;
					}}/>
				<input
					type="button"
					value="Focus the text input"
					onClick={this.focus}
				/>
			</div>
		);
	}
}

ReactDOM.render(<Reloj  />, document.getElementById('root') );


class Todo extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         text: "",
         todolist: props.list
      };
   }
   onSubmit(e) {
      e.preventDefault();
      console.log("onSubmit");
      var item = {
         text: this.state.text,
         checked: false
      };
      this.setState({
         text: "",
         todolist: this.state.todolist.concat([item])
      });
   }
   onChange(e) {
      console.log("onChange", e.target.value);
      this.setState({
         text: e.target.value,
         todolist: this.state.todolist
      });
   }
   render() {
      const todoList = this.state.todolist.map((item, index) => {
         return <li key={index}> {item.text} </li>;
      });
      return (
         <div>
            <form onSubmit={e => this.onSubmit(e)}>
               <input
                  value={this.state.text}
                  type="text"
                  onChange={e => this.onChange(e)}
               />
               <button type="submit"> add item</button>
            </form>
            <ol>{todoList}</ol>
         </div>
      );
   }
}

const items = [
   { text: "Aprender React", checked: false },
   { text: "Aprender JSX", checked: true },
   { text: "Aprender States", checked: false }
];

//ReactDOM.render(<Todo list={items} />, document.getElementById("root"));
/*
ReactDOM.render(
   <YoutubeComponent
      title={"My primer componente"}
      description={"Descripcion de mi componente"}
      videos={jsonObject.items}
   />,
   document.getElementById("root")
); */
registerServiceWorker();

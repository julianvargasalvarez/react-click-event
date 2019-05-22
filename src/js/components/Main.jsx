import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu.jsx";
import Netflix from "./Netflix.jsx";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      renderThisView: "Menu"
    };
  }

  handleChange(event) {
    this.setState({ renderThisView: event });
  }

  render() {
    const { renderThisView } = this.state;
    return (
      <div>
        { renderThisView === 'Menu' && <Menu onClick={this.handleChange.bind(this)}/>}
        { renderThisView === 'Netflix' && <Netflix onClick={this.handleChange.bind(this)} /> }
      </div>
    );
  }
}
export default Main;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;

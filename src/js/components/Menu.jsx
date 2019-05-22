import React, { Component } from "react";
import ReactDOM from "react-dom";

class Menu extends Component {
  constructor({onClick}) {
    super();
  }

  handleTheClick(event) {
    const theViewToBeRenderedByTheMainComponent = event.target.getAttribute("renderthisview")
    this.props.onClick(theViewToBeRenderedByTheMainComponent)
  }

  render() {
    return (
      <ol>
        <li renderthisview="Netflix" onClick={this.handleTheClick.bind(this)}>Netflix</li>
        <li renderthisview="HBO" onClick={this.handleTheClick.bind(this)}>HBO</li>
      </ol>
    );
  }
}
export default Menu;

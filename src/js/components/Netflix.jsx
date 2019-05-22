import React, { Component } from "react";
import ReactDOM from "react-dom";

class Netflix extends Component {
  constructor() {
    super();
  }

  handleTheClick(event) {
    const theViewToBeRenderedByTheMainComponent = event.target.getAttribute("renderthisview")
    this.props.onClick(theViewToBeRenderedByTheMainComponent)
  }

  render() {
    return (
      <div>
        <h1>Hola soy Netflix</h1>
        <ol>
          <li renderthisview="Menu" onClick={this.handleTheClick.bind(this)}>Regresar al menu</li>
        </ol>
      </div>
    );
  }
}
export default Netflix;

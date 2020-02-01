import React, { Component } from "react";
import CountdownRenderProps from "./render-props";

export default class App extends Component {
  render() {
    const date = new Date("2021-01-01"); // New year 2021!

    return (
      <div className="App">
        <CountdownRenderProps date={date} />
        <hr />
      </div>
    );
  }
}

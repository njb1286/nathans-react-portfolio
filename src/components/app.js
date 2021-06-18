import React, { Component } from 'react';
import moment from "moment"

export default class App extends Component {
  render() {
    return (
      <div clssName="app">
        <h1>Nathan's Portfolio</h1>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}

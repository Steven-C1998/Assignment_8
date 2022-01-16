import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //default table values
      rows: 0,
      columns: 0,
      color: "white"
    }
  }

  render() {
    return (
      <div id="body">
        <div id="all-btns">
          <button id="rowBtn" class="btns"> Add Row</button>
          <button id="colBtn" class="btns">Add Column</button>
          <button id="delRow" class="btns">Delete Row</button>
          <button id="delCol" class="btns">Delete Column</button>
          <button id="fillBtn" class="btns">Fill all</button>
          <button id="resetBtn" class="btns">Reset Color</button>
          <button id="fillEmpty" class="btns">Fill Empty</button>
          <form>
            <label id="dropDown">Choose a Color</label>
            <input type="color" id="colorInput" />
          </form>
        </div>

        <div id="container" draggable="false">
          <table id="mytab1" draggable="false">
            <tbody draggable="false" id="box">
            </tbody>
          </table>
        </div>

      </div>
    )

  }
}

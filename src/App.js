//import React, { Component } from 'react';
import React from 'react';
//import './App.css';

//React Components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storedVal: 0,
      tempVal: 0,
      displayVal: 0,
      operator: ""
    };
    this.handleClickValues = this.handleClickValues.bind(this);
    this.handleClickOperators = this.handleClickOperators.bind(this);
    this.handleClickEquals = this.handleClickEquals.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  /*This function is used for the clear/ AC button. Resets all state values to default.*/
  handleClickClear(event) {
    this.setState({
      storedVal: 0,
      tempVal: 0,
      displayVal: 0,
      operator: ""
    });
  }

  /*This function is used for the number and decimal buttons - adding their value into the appropriate variables and to the display. Variables are stored as strings until they are processed by an operator, at which point they are transformed using Number().*/
  handleClickValues(event) {
    var stateClone = { ...this.state };
    var tempVal;

    if (event.target.value === "." && /\./.test(stateClone.tempVal)) {
      tempVal = stateClone.tempVal;
    } else if (/^0/.test(stateClone.tempVal)) {
      tempVal = event.target.value;
    } else {
      tempVal = stateClone.tempVal + event.target.value;
    }

    console.clear();
    this.setState({
      tempVal: tempVal,
      displayVal: tempVal
    });
  }

  handleClickOperators(event) {
    console.clear();
    var stateClone = { ...this.state };
    var storedVal = stateClone.storedVal;
    // eslint-disable-next-line
    var tempVal = stateClone.tempVal;

    if (stateClone.storedVal === 0) {
      storedVal = stateClone.tempVal;
      tempVal = 0;
      this.setState({
        operator: event.target.id,
        storedVal: storedVal,
        tempVal: 0
      });
      console.log("test");
    } else if (stateClone.tempVal === 0 && stateClone.display !== 0) {
      /* Tests to see if tempVal equals zero while display doesn't, implying that 0 wasn't intentionally entered - therefore, the user switched operators before applying new values. If so, updates state to the latest operator.*/
      this.setState({
        operator: event.target.id
      });
    } else {
      /*Updates state to have the latest operator clicked and triggers equals if there is a value in both storedVal and tempVal*/
      this.setState({
        operator: event.target.id
      });
      document.getElementById("equals").click();
    }
  }

  handleClickEquals(event) {
    console.clear();
    var stateClone = { ...this.state };
    var result;

    function add(value1, value2) {
      var sum = value1 + value2;
      return sum;
    }

    function subtract(value1, value2) {
      var difference = value1 - value2;
      return difference;
    }

    function multiply(value1, value2) {
      var product = value1 * value2;
      return product;
    }

    function divide(value1, value2) {
      var quotient = value1 / value2;
      return quotient;
    }

    if (stateClone.operator === "add") {
      result = add(Number(stateClone.storedVal), Number(stateClone.tempVal));
    } else if (stateClone.operator === "subtract") {
      result = subtract(
        Number(stateClone.storedVal),
        Number(stateClone.tempVal)
      );
    } else if (stateClone.operator === "multiply") {
      result = multiply(
        Number(stateClone.storedVal),
        Number(stateClone.tempVal)
      );
    } else if (stateClone.operator === "divide") {
      result = divide(Number(stateClone.storedVal), Number(stateClone.tempVal));
    } else {
      result = stateClone.displayVal;
    }

    this.setState({
      storedVal: result,
      tempVal: 0,
      displayVal: result
    });
  }

  render() {
    return (

      <body>
        <div className="Wrapper">

          <div className="Display">
            {this.state.displayVal}
          </div>
          <div className="Calcgrid">
            <button id="clear" onClick={this.handleClickClear}>AC</button>
            <button id="seven" value={7} onClick={this.handleClickValues}>7</button>
            <button id="eight" value={8} onClick={this.handleClickValues}>8</button>
            <button id="nine" value={9} onClick={this.handleClickValues}>9</button>
            <button id="divide" className="FunctionBtn" onClick={this.handleClickOperators}>/</button>

            <button id="four" value={4} onClick={this.handleClickValues}>4</button>
            <button id="five" value={5} onClick={this.handleClickValues}>5</button>
            <button id="six" value={6} onClick={this.handleClickValues}>6</button>
            <button id="multiply" className="FunctionBtn" onClick={this.handleClickOperators}>x</button>

            <button id="one" value={1} onClick={this.handleClickValues}>1</button>
            <button id="two" value={2} onClick={this.handleClickValues}>2</button>
            <button id="three" value={3} onClick={this.handleClickValues}>3</button>
            <button id="subtract" className="FunctionBtn" onClick={this.handleClickOperators}>-</button>

            <button id="zero" value={0} onClick={this.handleClickValues}>0</button>
            <button id="decimal" value="." onClick={this.handleClickValues}>.</button>
            <button id="equals" className="FunctionBtn" onClick={this.handleClickEquals}>=</button>
            <button id="add" className="FunctionBtn" onClick={this.handleClickOperators}>+</button>


          </div>
        </div>
      </body>
    );
  }
}




export default App;

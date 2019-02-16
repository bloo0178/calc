import React from "react";
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
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

    this.setState({
      tempVal: tempVal,
      displayVal: tempVal
    });
  }

  handleClickOperators(event) {
    console.clear();
    let { storedVal, tempVal, displayVal } = this.state;

    if (storedVal === 0) {
      storedVal = tempVal;
      tempVal = 0;
      this.setState({
        operator: event.target.id,
        storedVal: storedVal,
        tempVal: 0
      });
    } else if (tempVal === 0 && displayVal !== 0) {
      /* Tests to see if tempVal equals zero while display doesn't, implying 
      that 0 wasn't intentionally entered - therefore, the user switched 
      operators before applying new values. If so, updates state to the latest operator.*/
      this.setState({
        operator: event.target.id
      });
    } else {
      /*Updates state to have the latest operator clicked and triggers equals if
       there is a value in both storedVal and tempVal*/
      this.setState({
        operator: event.target.id
      });
      document.getElementById("equals").click();
    }
  }

  handleClickEquals(event) {
    const { storedVal, tempVal, operator, displayVal } = this.state;
    var result;

    if (operator === "add") {
      result = Number(storedVal) + Number(tempVal);
    } else if (operator === "subtract") {
      result = Number(storedVal) - Number(tempVal);
    } else if (operator === "multiply") {
      result = Number(storedVal) * Number(tempVal);
    } else if (operator === "divide") {
      result = Number(storedVal) / Number(tempVal);
    } else {
      result = displayVal;
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
          <Display displayVal={this.state.displayVal} />
          <div className="Calcgrid">
            <button id="clear" onClick={this.handleClickClear}>
              AC
            </button>
            <Button type={"number"} buttonText={"7"} value={7} onClick={this.handleClickValues} />
            <Button type={"number"} buttonText={"8"} value={8} onClick={this.handleClickValues} />
            <Button type={"number"} buttonText={"9"} value={9} onClick={this.handleClickValues} />
            <button
              id="divide"
              className="FunctionBtn"
              onClick={this.handleClickOperators}
            >
              /
            </button>

            <Button type={"number"} buttonText={"4"} value={4} onClick={this.handleClickValues} />
            <Button type={"number"} buttonText={"5"} value={5} onClick={this.handleClickValues} />
            <Button type={"number"} buttonText={"6"} value={6} onClick={this.handleClickValues} />
            <button
              id="multiply"
              className="FunctionBtn"
              onClick={this.handleClickOperators}
            >
              x
            </button>

            <Button type={"number"} buttonText={"1"} value={1} onClick={this.handleClickValues} />
            <Button type={"number"} buttonText={"2"} value={2} onClick={this.handleClickValues} />
            <Button type={"number"} buttonText={"3"} value={3} onClick={this.handleClickValues} />
            <button
              id="subtract"
              className="FunctionBtn"
              onClick={this.handleClickOperators}
            >
              -
            </button>

            <Button type={"number"} buttonText={"0"} value={0} onClick={this.handleClickValues} />
            <button id="decimal" value="." onClick={this.handleClickValues}>
              .
            </button>
            <button
              id="equals"
              className="FunctionBtn"
              onClick={this.handleClickEquals}
            >
              =
            </button>
            <button
              id="add"
              className="FunctionBtn"
              onClick={this.handleClickOperators}
            >
              +
            </button>
          </div>
        </div>
      </body>
    );
  }
}

export default App;

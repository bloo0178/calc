import React from "react";

const withOperator = (WrappedComponent, state, updateState) =>
  class extends React.Component {
    handleClick = event => {
      let { storedVal, tempVal, displayVal, operator } = state;
      let result;

      const equals = () => {
        if (operator === "+") {
          result = Number(storedVal) + Number(tempVal);
        } else if (operator === "-") {
          result = Number(storedVal) - Number(tempVal);
        } else if (operator === "x") {
          result = Number(storedVal) * Number(tempVal);
        } else if (operator === "/") {
          result = Number(storedVal) / Number(tempVal);
        } else {
          result = displayVal;
        }
        storedVal = result;
        tempVal = 0;
        displayVal = result;
      };

      if (event.target.value === "=") {
        equals();
      } else if (storedVal === 0) {
        storedVal = tempVal;
        tempVal = 0;
        operator = event.target.value;
      } else if (tempVal === 0 && displayVal !== 0) {
      /* Tests to see if tempVal equals zero while display doesn't, implying
       * that 0 wasn't intentionally entered - therefore, the user switched
       * operators before applying new values. If so, updates state to the latest operator.
       */
        operator = event.target.value;
      } else {
      /* Trigger equals if there is a value in both storedVal and tempVal */
        equals();
        operator = event.target.value;
      }
      updateState(operator, storedVal, tempVal, displayVal);
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          text={this.props.value}
          type={"operator"}
          onClick={this.handleClick}
        />
      );
    }
  };

export { withOperator };

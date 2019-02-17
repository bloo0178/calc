import React from "react";

/* This HOC is used for the number and decimal buttons - adding their value into
 * the appropriate variables and to the display. Variables are stored as strings until
 * they are processed by an operator, at which point they are transformed using Number().
 */
const withValue = (WrappedComponent, tempVal, updateState) =>
  class extends React.Component {
    handleClick = event => {
      var newTempVal;
      if (event.target.value === "." && /\./.test(tempVal)) {
        newTempVal = tempVal;
      } else if (/^0/.test(tempVal)) {
        newTempVal = event.target.value;
      } else {
        newTempVal = tempVal + event.target.value;
      }
      updateState(null, null, newTempVal, newTempVal);
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          type={"val"}
          text={"" + this.props.value}
          onClick={this.handleClick}
        />
      );
    }
  };

export { withValue };

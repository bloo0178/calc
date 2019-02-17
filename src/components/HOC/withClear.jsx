import React from "react";

const withClear = (WrappedComponent, updateState) =>
  class extends React.Component {
    handleClick = () => {
      let storedVal = 0;
      let tempVal = 0;
      let displayVal = 0;
      let operator = "";
      updateState(operator, storedVal, tempVal, displayVal);
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          text={this.props.value}
          type={"clear"}
          onClick={this.handleClick}
        />
      );
    }
  };

export { withClear };

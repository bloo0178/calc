import React from "react";
import Display from "../components/Display/Display";
import Button from "../components/Button/Button";
import styles from "./App.module.scss";
import { withValue } from "../components/HOC/withValue";
import { withOperator } from "../components/HOC/withOperator";
import { withClear } from "../components/HOC/withClear";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storedVal: 0,
      tempVal: 0,
      displayVal: 0,
      operator: ""
    };
  }

  updateState = (operator, storedVal, tempVal, displayVal) => {
    if (operator === null) operator = this.state.operator;
    if (storedVal === null) storedVal = this.state.storedVal;
    if (tempVal === null) tempVal = this.state.tempVal;
    if (displayVal === null) displayVal = this.state.displayVal;
    this.setState({
      operator: operator,
      storedVal: storedVal,
      tempVal: tempVal,
      displayVal: displayVal
    });
  };

  render() {
    const { tempVal, displayVal } = this.state;
    const ValueButton = withValue(Button, tempVal, this.updateState);
    const OperatorButton = withOperator(Button, this.state, this.updateState);
    const ClearButton = withClear(Button, this.updateState);
    return (
      <div className={styles.appContainer}>
        <Display displayVal={displayVal} />
        <div className={styles.calcGrid}>
          <ClearButton value={"AC"} />

          <ValueButton value={7} />
          <ValueButton value={8} />
          <ValueButton value={9} />
          <OperatorButton value={"/"} />

          <ValueButton value={4} />
          <ValueButton value={5} />
          <ValueButton value={6} />
          <OperatorButton value={"x"} />

          <ValueButton value={1} />
          <ValueButton value={2} />
          <ValueButton value={3} />
          <OperatorButton value={"-"} />

          <ValueButton value={0} />
          <ValueButton value={"."} />
          <OperatorButton value={"="} />
          <OperatorButton value={"+"} />
        </div>
      </div>
    );
  }
}

export default App;

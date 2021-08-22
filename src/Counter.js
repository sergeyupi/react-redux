import React, {Component} from "react";
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div style={{padding: 20, border: '1px solid #ccc'}}>
        <h1>Counter {this.props.counter}</h1>
        <hr/>
        <div>
          <button onClick={this.props.onChange.bind(this, 100)}>Add 100</button>
          <button onClick={this.props.onChange.bind(this, 1000)}>Sub 1000</button>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter2.counter2
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onChange: (number) => dispatch({type: "ADD2", payload: number}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incliment, decrement} from '../actions'

class App extends Component {

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>count: {props.value}</div>
        <button onClick={props.incliment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  value: state.count.value
})

const mapDispatchProps = ({
  incliment, decrement
})

export default connect(mapStateToProps,mapDispatchProps)(App);


import React, {Component} from 'react';




const App = () => {


  return (
    <Counter></Counter>
  )
}
class Counter extends Component {
  constructor(prop) {
    super(prop)
    this.state = {count:0}
  }
handlepulath = () => {
  const count = this.state.count
  this.setState({count: count + 1})
}
mainasu = () => {
  this.setState({count: this.state.count -1})
}

  render() {

  return (
    <React.Fragment>
      <div>count: {this.state.count}</div>
      <button onClick={this.handlepulath}>+1</button>
      <button onClick={this.mainasu}>-1</button>

    </React.Fragment>
  )
  }
}



export default App;

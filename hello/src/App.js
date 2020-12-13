import React, {Component} from 'react';
import PropTypes from 'prop-types';



const App = () => {
  const porpsfile =[
    {
      name: "aaa",age: 10
    },
    {
      name: "bbbb"
    }
  ]
  porpsfile.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }
  return (
    <div>
      {
        porpsfile.map((p, index) => {
          return <User name={p.name} age={p.age} key={index}/>
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi!! {props.name} {props.age} です</div>
}



export default App;

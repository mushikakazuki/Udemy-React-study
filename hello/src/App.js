import React, {Component} from 'react';



const App = () => {
  const porpsfile =[
    {
      name: "aaa",age: 10
    },
    {
      name: "bbbb"
    }
  ]
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

User.defaultProps = {
  age: 1
}

export default App;

import React from 'react'


class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("hello")
  }
  state = {
    count: 0
  };

  // 하단은 JS 코드이다.
  // state shouldn't be updated directly. 
  // Instead, there's setState() - it allows React to let it know that it needs to refresh
  // setSTate를 호출할 때마다 react는 새로운 state를 render한다. 
  // 그래서 되도록이면 setState를 사용하지 않는다.
  add = () => {
    console.log("Add");
    this.setState(current =>({count: current.count + 1}))
  };
  minus = () => {
    console.log("Minus");
    this.setState(current => ({count: current.count - 1}))
  }
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated")
  }
  componentWillUnmount() {
    console.log("Good Bye, cruel world!")
  }

  //리액트는 자동적으로 class component의 render method를 실행한다.
  render() {
    console.log("render")
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

// map의 사용법 
// const friends = ["dal", "mark", "lynn", "japan guy"]
// friends.map(current => {
//   console.log(current);
//   return 0
// })
// => 출력하면 dal mark lynn japan guy [0, 0, 0, 0] (array도 리턴한다.)

// friends.map(function(friend){
//   return friend + "<3";
// })
// => 출력하면 ["dal<3", "mark<3", "lynn<3", "japan guy<3"]

// prop-types 설치
// - prop-types가 할일은 내가 전달받은 props가 내가 원하는 props인지 확인해 준다.

// 라이프사이클
// - mounting
//   - constructor: when the component mounts, show on screen, 
//   - static getDerivedStateFromProps()
//   - render()
//   - componentDidMount: component did mount for the first time
// - updating
//   - component is caused by user
//   - static getDerivedStateFromProps()
//   - shouldComponentUpdate() 
//   - render()
//   - componentDidUpdate()
// - unmounting - component is going to die (change the page or replace the component using state)
//   - componentWillUnmount()
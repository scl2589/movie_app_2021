import React from 'react'


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000)
  }
  render() {
    const { isLoading }  = this.state;
    return <div>{isLoading ? "Loading": "We are ready"}</div>
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
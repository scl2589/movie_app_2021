import React from 'react'

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like Potato</h1>;
// }

// ES6 방식
function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  // 캄포넌트는 html을 return하는 형태
  return <div>
    <h1>Hello</h1>
    {/* kimchi라는 value로 fav라는 이름의 property(props)를 줌 */}
    <Food fav="kimchi"/>
    <Food fav="ramen"/>
    <Food fav="salmon"/>
    <Food fav="salad"/>
    <Food fav="pasta"/>
  </div>
}

export default App;

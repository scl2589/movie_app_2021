import React from 'react'

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like Potato</h1>;
// }

// ES6 방식
function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

// foodILike는 object이다.
const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800"
  },
  {
    name: "Doncasu",
    image:
      "https://th3.tmon.kr/thumbs/image/ca9/338/813/747a4f277_700x700_95_FIT_1548187062.jpg"
  },
  {
    name: "Kimbap",
    image:
      "https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=1024x"
  }
];

function App() {
  // 캄포넌트는 html을 return하는 형태
  return <div>
    { foodILike.map(dish => <Food name={dish.name} picture={dish.image} /> )}
  </div>
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
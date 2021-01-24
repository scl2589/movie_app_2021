import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  // you have to wait for the function to process
  getMovies = async() => {
    //await = wait for axios to be finished
    const { 
      data: { 
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false }); //this.setState({ movies: movies })와 동일 
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies }  = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          < div class="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
              />
            ))}
          </div>
          )}
      </section>
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
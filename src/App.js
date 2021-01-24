import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
  <HashRouter>
    <Navigation />
    {/* /about doesn't has to have a same name with about */}
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={Detail}/>
  </HashRouter>
  )
}

export default App;
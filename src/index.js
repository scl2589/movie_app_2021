import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// javascript와 html의 조합을 jsx이라고 한다.
ReactDOM.render(
  <React.StrictMode>
    {/* React는 1개의 component만 render한다. */}
    <App />
  </React.StrictMode>,
  document.getElementById('potato')
);

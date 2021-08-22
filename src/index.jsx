import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.jsx'

ReactDOM.render((
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  ), document.getElementById('app')
);

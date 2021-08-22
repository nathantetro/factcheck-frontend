import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Converter from './components/Converter/Converter.jsx';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/converter' component={Converter}></Route>
    </Switch>
  );
}

export default Main;
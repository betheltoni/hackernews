import React from 'react';
import './App.scss';
import TopStories from './TopStories';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import LatestStories from './LatestStories';
import BestStories from './BestStories';


function App() {

  return (
    <div className="App">
      <h1>Hackers News Clone</h1>
      <BrowserRouter>
      <nav>
        <NavLink to="/">TOP STORIES</NavLink>
        <NavLink to="/latest">LATEST STORIES</NavLink>
        <NavLink to="/best">BEST STORIES</NavLink>
      </nav>
        <Routes>
          <Route path='/' element={<TopStories/>} />
          <Route path='/latest' element={<LatestStories/>} />
          <Route path='/best' element={<BestStories/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

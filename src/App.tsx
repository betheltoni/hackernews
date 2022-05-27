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
        <NavLink to="/hackernews/">TOP STORIES</NavLink>
        <NavLink to="/hackernews/latest">LATEST STORIES</NavLink>
        <NavLink to="/hackernews/best">BEST STORIES</NavLink>
      </nav>
        <Routes>
          <Route path='/hackernews/' element={<TopStories/>} />
          <Route path='/hackernews/latest' element={<LatestStories/>} />
          <Route path='/hackernews/best' element={<BestStories/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

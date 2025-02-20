import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Albums from './Albums';
import Photos from './Photos';
import Home from './Home';
import Banner from './Banner';
import Menu from './Menu';
import AlbumDetail from './AlbumDetail';

function App() {
  return (
    <div>
      <Banner title="Music Band Website Template" subtitle="" backgroundImage=""/>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/photo" element={<Photos />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
    </div>
  );
}

export default App;

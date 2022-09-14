import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Image from './components/ImagesRoute';
import { Navigation } from './components/navigation';
import { Contact } from './components/contact';
import Content from './components/Content';
import VideoRouter from './components/VideoRouter';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<App />} />
      <Route path="/Image" element={<Image />} />
      <Route path="/Video" element={<VideoRouter />} />
      <Route path="/content" element={<Content />} />
    </Routes>
    <Contact />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Image from './components/ImagesRoute';
import { Navigation } from './components/navigation';
import { Contact } from './components/contact';
import Videos from './components/VideosRoute';
import { About } from './components/about';
import { Gallery } from './components/gallery';
import { Developer } from './components/Developer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<App />} />
      <Route path="/Image" element={<Image />} />
      <Route path="/Video" element={<Videos />} />
    </Routes>
    <Contact />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { FeatureDetector } from './components/FeatureDetector';

ReactDOM.render(
  <FeatureDetector>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </FeatureDetector>,
  document.getElementById('root')
);

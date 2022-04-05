import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { FeatureDetector } from './components/FeatureDetector';
import { FeatureToggleProvider } from './components/FeatureToggle';

ReactDOM.render(
  <FeatureDetector>
    <FeatureToggleProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </FeatureToggleProvider>
  </FeatureDetector>,
  document.getElementById('root')
);

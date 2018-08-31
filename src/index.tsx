// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Vendor components
import {BrowserRouter as Router} from 'react-router-dom';

// Components
import Application from 'doggo-web-webapp/ui/application';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Styles
import './index.css';

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

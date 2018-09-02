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

// Context
import {ApplicationContextProvider} from 'doggo-web-webapp/ui/@context';

ReactDOM.render(
  <ApplicationContextProvider>
    <Router>
      <Application />
    </Router>
  </ApplicationContextProvider>,
  document.getElementById('root')
);
registerServiceWorker();

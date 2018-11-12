// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Application from 'doggo/ui/application';

// Vendor components
import {BrowserRouter as Router} from 'react-router-dom';

// Styles
import 'simple-css-reset/reset.css';

// Own Styles
import 'doggo/styles/global.css';

// Context
import {ApplicationContextProvider} from 'doggo/context';
import {ThemeContextProvider} from 'doggo/theme';

ReactDOM.render(
  <ThemeContextProvider>
    <ApplicationContextProvider>
      <Router>
        <Application />
      </Router>
    </ApplicationContextProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
);

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Application from 'doggo/ui/application';

// Styles
import 'simple-css-reset/reset.css';

// Context
import {ApplicationContextProvider} from 'doggo/context';
import {ThemeContextProvider} from 'doggo/theme';

ReactDOM.render(
  <ThemeContextProvider>
    <ApplicationContextProvider>
      <Application />
    </ApplicationContextProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
);

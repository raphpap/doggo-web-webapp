// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Application from 'doggo-web-webapp/ui/application';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Styles
import './index.css';

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();

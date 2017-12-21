import React from 'react';
import ReactDOM from 'react-dom';
// import routes from './navigators/routes';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<App />, 
document.getElementById('root'));

registerServiceWorker();

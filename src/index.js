import React from 'react';
import ReactDOM from 'react-dom';
import Remote from './remote';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Remote />, document.getElementById('root'));
registerServiceWorker();

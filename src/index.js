import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {HelloUser} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<HelloUser />, document.getElementById('boot'));
registerServiceWorker();

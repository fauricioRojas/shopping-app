import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import stores from './stores';

import './scss/style.scss';

ReactDOM.render (
	<Provider {...stores}>
		<App />
	</Provider>,
	document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/app.scss';

// ESBuild Hot Reload for dev environment only
if (process.env.NODE_ENV === 'development') {
	new EventSource('/esbuild').addEventListener('change', () => location.reload());
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

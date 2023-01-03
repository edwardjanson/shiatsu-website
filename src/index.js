import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';

const root = ReactDOM.createRoot(document.getElementById('root'));

const history = createBrowserHistory();

// S3 routing solution taken from: https://via.studio/journal/hosting-a-reactjs-app-with-routing-on-aws-s3
if (root) {
	const path = (/#!(.*)$/.exec(window.location.hash) || [])[1];
	if (path) {
		history.replace(path);
	}

	root.render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

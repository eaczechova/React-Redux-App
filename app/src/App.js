import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import thunk from 'redux-thunk';
import RandomUser from './RandomUser';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<div>
				<h1>Random User Generator</h1>
				<RandomUser />
			</div>
		</Provider>
	);
}
